const express=require("express")
const router=express.Router()
const model=require('../model/electrician_managment_model');

class electrician_managment extends model{

  add_electrician(req,res){
    const {name,other_info}=req.body;
    if(name==null){
      res.json({'status':false,'message':'Electrician Name is Mandarory'});
      return;
    }
    const query_response= this.fn_add_electrician_query(name,other_info);
     query_response.then((result)=>
      res.json(result)
     ).catch((error)=>res.json(error))
  
  }

  add_sites(req,res){

    const {date,is_completed,assigned_electrician_id,other_info}=req.body;
    if(assigned_electrician_id==null){
      res.json({'status':false,'message':'Electrician Id is Mandarory'});
      return;
    }
  }

  assign_sites(req,res){
    const active_electrician_result = this.fn__get_active_available_electrician();
    const pending_site_result = this.fn__get_pending_site_id();

    Promise.all([active_electrician_result, pending_site_result])
        .then(([electrician_data, site_data]) => {
            if (!electrician_data.is_success) {
                res.json({
                    status: false,
                    message: 'Error fetching active electricians: ' + electrician_data.error
                });
                return;
            }

            if (!site_data.is_success) {
                res.json({
                    status: false,
                    message: 'Error fetching pending sites: ' + site_data.error
                });
                return;
            }

            const active_electricians = electrician_data.data_array;
            const pending_sites = site_data.data_array;

            const number_of_available_sites = pending_sites.length;
            const number_of_active_electricians = active_electricians.length;
            const sitesPerElectrician = Math.floor(number_of_available_sites / number_of_active_electricians);
            let assigned_sites = 0;
            let electrician_index = 0;
            for (let site of pending_sites) {
                const assigned_electrician = active_electricians[electrician_index];
                site.assigned_electrician_id = assigned_electrician.electrician_id;
                
                this.fn__update_site_with_assigned_electrician(site.id, assigned_electrician.electrician_id)
                    .then((update_result) => {
                        if (!update_result.is_success) {
                            console.error('Error updating site:', update_result.error);
                        }
                    })
                    .catch((error) => {
                        console.error('Error updating site:', error);
                    });
                    electrician_index = (electrician_index + 1) % number_of_active_electricians;
                    assigned_sites++;
                if (assigned_sites >= number_of_available_sites) {
                    break;
                }
            }

            res.json({
                status: true,
                message: 'Sites assigned successfully'
            });
        })
        .catch(error => {
            res.json({
                status: false,
                message: 'Error assigning sites: ' + error.message
            });
        });
  }

}
 
module.exports=electrician_managment
const express=require("express")
const router=express.Router()
const db_model=require("../src/db_config/db_model.js")

class electrician_managment_model extends db_model{

    constructor(){
        super('write');
       }

    async fn_add_electrician_query(name,other_info){
        return this.fn__execute_query(`INSERT INTO electricians(name,other_info) VALUES(?,?)`,[name,other_info])
        .then((result)=>{
            if(result.is_success){
            return {'status':true,'message':'Electrician Added Successfully'};
            }else{
            return {'status':false,'message':result.error};  
            }
        }).catch((error)=>{
            return {'status':false,'message':error};
        })
      
    }

    fn__add_add_sites_query(date,is_completed,assigned_electrician_id,other_info){
        return this.fn__execute_query(`INSERT INTO sites(date,is_completed,assigned_electrician_id,other_info)
        VALUES(COALESCE(?,CURRENT_DATE),COALESCE(?,'f',?,?)`,[date,is_completed,assigned_electrician_id,other_info])
        .then((result)=>{
            if(result.is_success){
                return {'status':true,'message':'Electrician Added Successfully'};
                }
                else{
                return {'status':false,'message':result.error};  
                }
           
       }).catch((error)=>{
        return {'status':false,'message':error};
       })   
    }

    fn__get_active_available_electrician(){
        return this.fn__select_query(`SELECT * from electricians where is_active='t'`,[])
        .then((result)=>{
            if(result.is_success){
                return {'status':true,'message':'','data':result.data_array};
                }
                else{
                return {'status':false,'message':result.error};  
                }
           
       }).catch((error)=>{
        return {'status':false,'message':error};
       })  
    }

    
    fn__get_pending_site_id(){
        return this.fn__select_query(`SELECT * FROM sites WHERE is_completed='f'`,[])
        .then((result)=>{
            if(result.is_success){
                return {'status':true,'message':'','data':result.data_array};
                }
                else{
                return {'status':false,'message':result.error};  
                }
           
       }).catch((error)=>{
        return {'status':false,'message':error};
       })  
    }
}

module.exports=electrician_managment_model;
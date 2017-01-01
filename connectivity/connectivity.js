////Development 

//var sUsernameServiceCall="INPATN05";
//var sPasswordServiceCall="Pass9876dm1";
//var createUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_CREATE_SRV/";
//var srchHlpUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_SRCH_PURCHASE_SRV/";
//var authUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_USER_AUTH_SRV/";
//var approvalUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGM_GETWORKLIST_SR_SRV/";
debugger;
var host = this.location.hostname;
var port = this.location.port;
var preUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/"
if (host == "uschlmdg4001v.corporate.ingrammicro.com") {  
	//Development
	var User="INRANS10";
	var Password="anish12345";
	var preUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/";//ZGW_PURREQ_CREATE_SRV/";
//	var srchHlpUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_SRCH_PURCHASE_SRV/";
//	var authUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_USER_AUTH_SRV/";
//	var approvalUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGM_GETWORKLIST_SR_SRV/";	
    
} else if ( host == "uschlmdg2001v.corporate.ingrammicro.com"){
    //Quality
	var sUsernameServiceCall="INPATN05";
	var sPasswordServiceCall="Pass3510qm1";
	var createUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_CREATE_SRV/";
	var srchHlpUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_SRCH_PURCHASE_SRV/";
	var authUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_USER_AUTH_SRV/";
	var approvalUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGM_GETWORKLIST_SR_SRV/";


} else if (host == "uschamdg1001d.corporate.ingrammicro.com"){
	//Production 
	var sUsernameServiceCall="INPATN05";
	var sPasswordServiceCall="Pass3510qm1";
	var createUrl="http://uschamdg1001d.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_CREATE_SRV/";
	var srchHlpUrl="http://uschamdg1001d.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_SRCH_PURCHASE_SRV/";
	var authUrl="http://uschamdg1001d.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_USER_AUTH_SRV/";
	var approvalUrl="http://uschamdg1001d.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGM_GETWORKLIST_SR_SRV/";

} else {
	// hitting to Development for localhost
	var User="INRANS10";
	var Password="anish12345";
	var preUrl="http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/";
};

debugger;



////////Quality
//var sUsernameServiceCall="INPATN05";
//var sPasswordServiceCall="Pass3510qm1";
//var createUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_CREATE_SRV/";
//var srchHlpUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_SRCH_PURCHASE_SRV/";
//var authUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/sap/ZGW_PURREQ_USER_AUTH_SRV/";
//var approvalUrl="http://uschlmdg2001v.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGM_GETWORKLIST_SR_SRV/";


////Production

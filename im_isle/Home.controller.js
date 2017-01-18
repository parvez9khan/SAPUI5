//sap.ui.controller("im_isle.Home", {
//
///**
//* Called when a controller is instantiated and its View controls (if available) are already created.
//* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
//* @memberOf im_isle.Home
//*/
//	onInit: function() {
//
//	},
//
///**
//* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
//* (NOT before the first rendering! onInit() is used for that one!).
//* @memberOf im_isle.Home
//*/
////	onBeforeRendering: function() {
////
////	},
//
///**
//* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
//* This hook is the same one that SAPUI5 controls get after being rendered.
//* @memberOf im_isle.Home
//*/
////	onAfterRendering: function() {
////
////	},
//
///**
//* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
//* @memberOf im_isle.Home
//*/
////	onExit: function() {
////
////	}
//
//});
sap.ui.define([
    "jquery.sap.global",               
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/ui/Device",
	"sap/ui/model/Filter",
	"sap/ui/model/resource/ResourceModel"
], function(jQuery, Controller, MessageToast, Dialog, Device, Filter, ResourceModel) {
	"use strict";

	return Controller.extend("im_isle.Home", {
		onInit: function() {
//			debugger;
//		     // set i18n model on view
//	         var i18nModel = new ResourceModel({
//	            bundleUrl: "i18n/i18n.properties"
//	         });
//	         this.getView().setModel(i18nModel, "i18n");
		},

	onAfterRendering: function() {
//		$("#__button0").hide();
		debugger;
		var login = 1;
       if(this.getView().sId == "page1" & login == 0){
		var dialog = new sap.m.Dialog({
			title: 'Login',
			type: 'Message',
			contentWidth: "400px",
			contentHeight: "220px",
			content: [
			    new sap.m.Image({src:"data:image/png;base64,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"}).addStyleClass("myloginlogo"),      
				new sap.m.Label({}),
			    new sap.m.Input({ placeholder: 'Username',
					              value:"John.smith@domian.com"}),
                new sap.m.Input({ placeholder: 'Password',
						                type:"Password"}),
			    new sap.m.Label({text:"Copyright 2016-2017 Ingram Micro Inc."}).addStyleClass("mycenter")
			],
			beginButton: new sap.m.Button({
				text: 'Login',
				enabled: true,
				press: function () {
					dialog.close();
				}
			}),
			endButton: new sap.m.Button({
				text: 'Cancel',
				press: function () {
					dialog.close();
				}
			}),
			afterClose: function() {
				dialog.destroy();
			}
		});
        login = 1;
		dialog.open();
       } else{ login = 1}
	
       var carousel = sap.ui.getCore().byId('page1--__carousel1');
       if(carousel){
		carousel_auto = setTimeout(function() { carousel.next();}, 3500);
       }
//		var carousel = sap.ui.getCore().byId('page1--__carousel1');
//		if(carousel!=undefined){
//		carousel.next();
//		setTimeout(function() { carousel.next();}, 2500);
//		}
			},
		_pageChanged: function(oEvent) {
		
				clearTimeout(carousel_auto);
		
				var carousel = sap.ui.getCore().byId('page1--__carousel1');
				carousel_auto = setTimeout(function() { carousel.next();}, 3500);
			
	   },
		onSuggest: function (oEvent) {
			debugger;
			
			var oView = this.getView();
//			oView.setModel(oCartCurrent);
			this.oSF = oView.byId("__field01");
			this.oSF.setModel(oCartCurrent);
			var value = oEvent.getParameter("suggestValue");
			var filters = [];
			if (value && value.length > 1) {
				filters = [new sap.ui.model.Filter([
		                                               new sap.ui.model.Filter("ProductId", function(sText) {
			                                            	return (sText || "").toUpperCase().indexOf(value.toUpperCase()) > -1;
			                                               }),
			                                           new sap.ui.model.Filter("Name", function(sDes) {
				                                            return (sDes || "").toUpperCase().indexOf(value.toUpperCase()) > -1;
				                                           })
		                                               ], false)];
				
				this.oSF.getBinding("suggestionItems").filter(filters);
				this.oSF.suggest();
			}
			else if(value.length == 0){
				this.oSF.removeAggregation("suggestionItems");
				this.oSF.suggest(value, filters);
			}
 
			
		},
		onSearch: function(oEvent) {
			debugger;
			var item = oEvent.getParameter("suggestionItem");
			if (item) {
				sap.m.MessageToast.show("search for: " + item.getText());
			}
//			var sValue = oEvent.getParameter("query");
//			var oFilter = new Filter("Name", sap.ui.model.FilterOperator.Contains, sValue);
//			var oBinding = oEvent.getSource().getBinding("items");
//			var flt = oMyOrder.oData.rootnode.filter([oFilter]);
		},
	   download: function(){
		   debugger;
		//BOC: To download any file to local system/Mobile
//		   var link=document.createElement('a');
//		   document.body.appendChild(link);
//		   link.href="./image/OMT_1.pdf" ;
//		   link.download="Invoice";
//		   link.click();
		 //EOC: To download any file to local system/Mobile	   
	   },
		pressOnTileOne: function() {
			debugger;
			//Router
			var HashChanger = new sap.ui.core.routing.HashChanger();
			// oHashChanger.setHash(router.getURL(selected));
			HashChanger.setHash("Prod");
			sap.ui.getCore().byId("page2--_txtavl").setText("");
			sap.ui.getCore().byId("page2--idProductsTable").setBusy(true);
	        var url= preUrl + "ZGW_EA_PNA_SRV";
			var parameters = "/PNAHEADERSET(vpn='KACMMF',country='USA',wid='US10',customer='17612091')/PNAITEMSET";
			var oModelMS = new sap.ui.model.odata.ODataModel(url, false, User, Password);
			oModelMS.read(parameters, {
				success: function(data){
					data.results
					debugger;
					sap.ui.getCore().byId("page2--idProductsTable").setBusy(false);
//					 busyLoader.close();
					  console.log("Reading PnA success");
					  sap.ui.getCore().getModel("pna").setData(data.results, true);
				      },
				error:function(){
					 debugger;  
//					  busyLoader.close();
					 sap.ui.getCore().byId("page2--idProductsTable").setBusy(false);
				  	   console.log("Error in Reading PnA");
				        }
				});        
//			var pnl = sap.ui.getCore().byId("page2--_video");
//			pnl.addContent(html1);
//			app.to(page2);

			// debugger;
			// alert("You have clicked tile");
		},
		homepage: function() {
			var HashChanger = new sap.ui.core.routing.HashChanger();
			HashChanger.setHash("");
//			app.to(page1);
		},
//		back: function() {
//			var HashChanger = new sap.ui.core.routing.HashChanger();
//			HashChanger.setHash("");
//			app.back();
//		},
		addtocart: function() {
			var btn = sap.ui.getCore().byId("page2--_homecart1");
			btn.setText("Cart(4)");
			btn = sap.ui.getCore().byId("page3--_homecart1");
			btn.setText("Cart(4)");
			MessageToast.show("Item added to cart successfully");
		},
		cart: function() {
			
			debugger;

			var oTable = new sap.m.Table({
				// mode: sap.m.ListMode.MultiSelect,
				noDataText:"Cart is Empty",
				columns: [
					new sap.m.Column({
						header: new sap.m.Label({
							// text: "Product" "Image"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						minScreenWidth:"Phone", 
						demandPopin:true
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: "Product"

						}),
						vAlign: "Middle",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Phone", 
						demandPopin:true
							//   hAlign:"Center"
					}),

					new sap.m.Column({
						header: new sap.m.Label({
							text: "Properties"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Desktop", 
						demandPopin:true
					}),

					new sap.m.Column({
						header: new sap.m.Label({
							text: "Unit"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Desktop", 
						demandPopin:true
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: "Price/Unit"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Desktop", 
						demandPopin:true
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: "Quantity"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Phone", 
						demandPopin:true
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: "Discount"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Desktop", 
						demandPopin:true
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: "Extended Amount"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Desktop", 
						demandPopin:true
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: "Suggestions"

						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Desktop", 
						demandPopin:true
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: ""
						}),
						vAlign: "Middle",
						hAlign: "Center",
						flexible: true,
						resizable: true,
						autoResizable: true,
						width: 'auto',
						minScreenWidth:"Desktop", 
						demandPopin:true

					})
				],
				items: {
					path: "currentcart>/rootnode",
					template: new sap.m.ColumnListItem({
						cells: [
							//new sap.m.Text({ text: "{name}" }),
							//new sap.m.Text({ text: "{value}" })
							new sap.m.Image({
								src: "{currentcart>URL}"
							}),
							//     	new sap.m.Text( {
							//                    text:"{ProductId}"
							// }),

							new sap.m.ObjectIdentifier({
								title: "{currentcart>Name}",
								titleActive: true,
								text: "{currentcart>ProductId}"
							}),
							// new sap.m.Text( {
							// 	text:"{Name}"	
							// }),
							new sap.m.Text({
								text: "{currentcart>Properties}"
							}),
							new sap.m.Text({
								text: "{currentcart>Unit}"
							}),
							new sap.m.Text({
								text: "{currentcart>Price}"
							}),
							new sap.m.Text({
								text: "{currentcart>Quantity}"
							}),
							new sap.m.Text({
								text: "{currentcart>Discount}"
							}),
							new sap.m.Text({
								text: "{currentcart>ExtendedAmount}"
							}),
							new sap.m.Text({
								text: "{currentcart>Suggestions}"
							}),
							new sap.m.Button({
								text: "Remove",
								type: "Reject"
								
									
							})
						]
					})
				},
			});

//			oTable.setModel(oCartCurrent);
			

			var dialog = new sap.m.Dialog({
				title: 'Shopping Cart',
				type: 'Message',
				state: 'Success',
				resizable: true,
				draggable: true,
//				contentWidth:"700px",
				stretch: true,
//				maxwidth:"100%",
//				height:"400px",
				content:[oTable],
				// content: new sap.m.Text({
				// 	text: "Order 9000123456 created successfully ",
				// 	textAlign: "Center"
				// }),
				
				buttons :[
//				 new sap.m.Button({
//					text: "Total:$932.00",//new sap.m.Label({text:"Total $938", level:"H2"}),
//					enabled:false
//				}),
				new sap.m.Button({
					text: 'Checkout',
					icon:"sap-icon://cart-approval",
					type: "Accept",
					press: function() {
						dialog.close();
//						 var HashChanger = new sap.ui.core.routing.HashChanger();
//						 HashChanger.setHash("Check");
//						 app.to(page3);
						var oController = sap.ui.getCore().byId("page3").getController();
						oController.checkout();
					}
				}),
				new sap.m.Button({
					text: 'Close',
//					icon:"sap-icon://back-to-top",
					type: "Transparent",
					press: function () {
						dialog.close();
					}
				})
				],
				afterClose: function() {
					dialog.destroy();
				}
			});
//			dialog.addContent(oTable);
//			dialog.setContentWidth("400px")
			dialog.open();
		},
		onMenuAction: function(oEvent){
			debugger;
			var oItem = oEvent.getParameter("item"),
			sItemPath = "";
		while (oItem instanceof sap.m.MenuItem) {
			sItemPath = oItem.getText();// + " > " + sItemPath;
			oItem = oItem.getParent();
		}

//		sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

		if(sItemPath == "My Orders"){
//from here			
			page1.setBusy(true);
			debugger;
			var sOrdUrl = preUrl+"ZGW_ORD_DETAILS_OMT_SRV";///ORD_HEAD_RSPSet?$filter=SoldTo%20eq%20%2717-612091%27";
//			var sOrdUrl = "http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGW_ORD_CREATE_OMT_SRV";
			var oModelEP = new sap.ui.model.odata.ODataModel(sOrdUrl, true , User, Password);
			var parameters = "/ORD_SRCH_RSPSet";
//			var parameters = "/PNAHEADERSET(vpn='KACMMF',country='USA',wid='US10',customer='17612091')/PNAITEMSET";
			
//			var sValue = 'Canon';//oEvent.getParameter("query");
//			var oFilter = new Filter("Name", sap.ui.model.FilterOperator.Contains, sValue);
//			var oBinding = oEvent.getSource().getBinding("items");
//			var flt = oMyOrder.oData.rootnode.filter([oFilter]);
			
			oModelEP.read(parameters, {
				
//				filters: [oFilter],
				success: function(data){
					debugger;
					oMyOrder.oData.rootnode.splice(0,1);
					var temp = oMyOrder.oData.rootnode;
					oMyOrder.oData.rootnode = [];
					oMyOrder.oData.rootnode.push({
							"URL": "./image/canon_cam.jpg",
							"OrderId": data.results[0].DocNumber,
							"Name": data.results[0].MatDesc,
							"Properties": "128 GB",
							"Unit": "EA",
							"Price": data.results[0].NetProdPrice,
							"Currency": data.results[0].Currency,
							"Quantity": data.results[0].ReqQty,
							"Shipped": "Delivered via"+data.results[0].Carrier,
							"Completed": data.results[0].OverallStatus,
							"Status": "Success",
							"OrderDate": "Nov 29, 2016"
						
					});
					for(var i=0;i<temp.length;i++){
					     oMyOrder.oData.rootnode.push({                       
					                           "URL": temp[i].URL,
												"OrderId": temp[i].OrderId,
												"Name": temp[i].Name,
												"Properties": temp[i].Properties,
												"Unit": temp[i].Unit,
												"Price": temp[i].Price,
												"Currency": temp[i].Currency,
												"Quantity":temp[i].Quantity,
												"Shipped": temp[i].Shipped,
												"Completed": temp[i].Completed,
												"Status": temp[i].Status,
												"OrderDate": temp[i].OrderDate});
					};
					var dialog = new sap.m.Dialog({
						title: 'My Orders',
						dragable: true,
						resizable:true,
						content: new sap.m.List({
//							headerText:"Order#",
							noDataText:"Orders not found",
							items: {
								path: 'myorder>/rootnode',
								template: new sap.m.ObjectListItem({
									title: "{myorder>OrderId}",
									intro :"{myorder>Name}",
									icon :"{myorder>URL}",
									type:'Active',
									press:function(oEvent){
										dialog.close();
										debugger;
										var HashChanger = new sap.ui.core.routing.HashChanger();
										sap.ui.getCore().byId("page4--_order").setValue(oMyOrder.oData.rootnode[0].OrderId);
										HashChanger.setHash("Order");
//										page4.setModel({"Order":oMyOrder.oData.rootnode[0].OrderId});
//										app.to(page4);
//										var oController = sap.ui.getCore().byId("page3").getController();
//										oController.checkout();
									},
									number:"{myorder>Price}",
									numberUnit:"{myorder>Currency}",
//									numberState:"Success",
									description : "{myorder>Name}",
									attributes:[ new sap.m.ObjectAttribute({
										title:"Ordered on",
										text:"{myorder>OrderDate}"
										
									})],
									
									firstStatus : new sap.m.ObjectStatus({
										title:"{myorder>Shipped}",
										text:"{myorder>Completed}",
										state:"{myorder>Status}"
									})
								})
							}
						}),//.setModel(oModel)
						beginButton: new sap.m.Button({
							text: 'Close',
							press: function () {
								dialog.close();
							}
						}),
						afterClose: function() {
							dialog.destroy();
						}
					});
					dialog.open();
//					 busyLoader.close();
					  console.log("Reading MyOrders success");
					  page1.setBusy(false);
				      },
				error:function(error){
					 debugger;  
//					  busyLoader.close();
					 var dialog = new sap.m.Dialog({
							title: 'My Orders',
							dragable: true,
							resizable:true,
							content: new sap.m.List({
//								headerText:"Order#",
								noDataText:"Orders not found",
								items: {
									path: 'myorder>/rootnode',
									template: new sap.m.ObjectListItem({
										title: "{myorder>OrderId}",
										intro :"{myorder>Name}",
										icon :"{myorder>URL}",
										type:'Active',
										press:function(){
											dialog.close();
											var HashChanger = new sap.ui.core.routing.HashChanger();
											HashChanger.setHash("Order");
//											app.to(page4);
//											var oController = sap.ui.getCore().byId("page3").getController();
//											oController.checkout();
										},
										number:"{myorder>Price}",
										numberUnit:"{myorder>Currency}",
//										numberState:"Success",
										description : "{myorder>Name}",
										attributes:[ new sap.m.ObjectAttribute({
											title:"Ordered on",
											text:"{myorder>OrderDate}"
											
										})],
										
										firstStatus : new sap.m.ObjectStatus({
											title:"{myorder>Shipped}",
											text:"{myorder>Completed}",
											state:"{myorder>Status}"
										})
									})
								}
							}),//.setModel(oModel)
							beginButton: new sap.m.Button({
								text: 'Close',
								press: function () {
									dialog.close();
								}
							}),
							afterClose: function() {
								dialog.destroy();
							}
						});
						dialog.open();
				  	   console.log("Error in Reading MyOrders");
				  	 page1.setBusy(false);
				        }
				});
//Till here
		}
		},
		//
		onDialogClosed: function (oEvent) {
			jQuery.sap.clearDelayedCall(_timeout);
 
//			if (oEvent.getParameter("cancelPressed")) {
//				MessageToast.show("The operation has been cancelled");
//			} else {
//				MessageToast.show("The operation has been completed");
//			}
		},
		availabilitycheck: function(){
			debugger;
			var txt = sap.ui.getCore().byId("page2--_txtavl").setText("Available @ Irvine, CA, USA");	
		},
		//
		placeorder: function(oEvent) {
			
			debugger;

			//Random Cust PO Number
			var cponum =Math.floor((Math.random() * 23) + 1234 * 13);
			    cponum = "CONS"+cponum
			// Odata Call
			var ojsondata = {
					  "SalesOrg": "8190",
					  "DistCh": "10",
					  "Division": "10",
					  "CustPo": cponum,
					  "OrderType": "ZOMT",
					  "HeaderNavItem": [{
					    "Item": "10",
					    "MatDsc": "A300_ZA1861",
					    "Price": "17.11", 
					    "Quantity": qnt
					  } 
					  ],
					  "HeaderNavParv": [{
					    "PartnerFn": "SP",
					    "Item": "",
					    "PartnerId": "017-612091"
					  }, {
					    "PartnerFn": "SH",
					    "Item": "",
					    "PartnerId": "017-612091"
					  }]
					}

			var sOrdUrl = preUrl+"ZGW_ORD_CREATE_OMT_SRV";
//			var sOrdUrl = "http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGW_ORD_CREATE_OMT_SRV";
			var oModelEP = new sap.ui.model.odata.ODataModel(sOrdUrl, true , User, Password);
			debugger;
//			// instantiate dialog
//			if (!this._dialog) {
//				this._dialog = sap.ui.xmlfragment("im_isle/BusyDialog", this);
//				this.getView().addDependent(this._dialog);
//			}
//			// open dialog
//			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._dialog);
//			this._dialog.open();
// 
//			// simulate end of operation
//			_timeout = jQuery.sap.delayedCall(3000, this, function () {
//				this._dialog.close();
//			});
//			

			oModelEP.create("/ORDER_HEADERSet", ojsondata, 
				{
				success: function(data,response){
					
					var dialog = new sap.m.Dialog({
						title: 'Thank You for Shopping at Ingram Micro',
						type: 'Message',
						state: 'Success',
						content: new sap.m.Text({
							text: "Your order "+data.OrderNo+" has been placed successfully ",
							textAlign: "Center"
						}),
						beginButton: new sap.m.Button({
							text: 'OK',
							press: function() {
								dialog.close();
								var HashChanger = new sap.ui.core.routing.HashChanger();
								HashChanger.setHash("");
//								app.to(page1);
							}
						}),
						afterClose: function() {
							dialog.destroy();
						
						}
					});
					dialog.open();					
				},
			error:function(data){
				
				console.log("Problem in creating order");
			}	
			});
			
			
		},
		writereview: function () {
			var dialog = new sap.m.Dialog({
				title: 'Review',
				type: 'Message',
				content: [
//					new sap.m.Text({ text: 'Write your review....' }),
//					new sap.m.TextArea('submitDialogTextarea', {
//						liveChange: function(oEvent) {
//							var sText = oEvent.getParameter('value');
//							var parent = oEvent.getSource().getParent();
//							parent.getBeginButton().setEnabled(sText.length > 0);
//						},
//						width: '100%',
//						placeholder: 'Add note (required)'
//					}),
					new sap.m.FeedInput({
						placeholder:'Write review here',
						icon:'data:image/jpeg;base64,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',
						post: function () {
							MessageToast.show("Thanks for your review. It will help Ingram Micro to provide you better service...",
								{
							    duration: 5500,                  
							    width: "20em",
							    });
							dialog.close();
						}
					}),
					new sap.m.RatingIndicator()
				],
//				beginButton: new sap.m.Button({
//					text: 'Submit',
//					enabled: false,
//					press: function () {
//						var sText = sap.ui.getCore().byId('submitDialogTextarea').getValue();
//						MessageToast.show("Thanks for your review. It will help Ingram Micro to provide you better service...",
//							{
//						    duration: 5500,                  
//						    width: "20em",
//						    });
//						dialog.close();
//					}
//				}),
				endButton: new sap.m.Button({
					text: 'Cancel',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
 
			dialog.open();
		},
		checkout: function() {
			debugger;
			var HashChanger = new sap.ui.core.routing.HashChanger();
			HashChanger.setHash("Check");
			sap.ui.getCore().getModel("currentcart").setData(oCartCurrent, true);
			 qnt = sap.ui.getCore().byId("__input0-page2--idProductsTable-0").getValue();//Hardcode
			 sap.ui.getCore().byId("__text56-page3--idProductsTable-0").setText(qnt);//Hardcode
			 
//			app.to(page3);
		}
	});
});

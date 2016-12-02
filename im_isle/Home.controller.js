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
	"sap/ui/Device"
], function(jQuery, Controller, MessageToast, Dialog, Device) {
	"use strict";

	return Controller.extend("im_isle.Home", {
		onInit: function() {

		},
	onAfterRendering: function() {
		debugger;
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
						minScreenWidth:"Desktop", 
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
		onMenuAction: function(){
			page1.setBusy(true);
			debugger;
			var sOrdUrl = preUrl+"ZGW_ORD_DETAILS_OMT_SRV";///ORD_HEAD_RSPSet?$filter=SoldTo%20eq%20%2717-612091%27";
//			var sOrdUrl = "http://uschlmdg4001v.corporate.ingrammicro.com:8000/sap/opu/odata/SAP/ZGW_ORD_CREATE_OMT_SRV";
			var oModelEP = new sap.ui.model.odata.ODataModel(sOrdUrl, true , User, Password);
			var parameters = "/ORD_SRCH_RSPSet";
//			var parameters = "/PNAHEADERSET(vpn='KACMMF',country='USA',wid='US10',customer='17612091')/PNAITEMSET";
			oModelEP.read(parameters, {
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
				error:function(){
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
				console.log("Error in creating order");
				var dialog = new sap.m.Dialog({
					title: 'Thank You for Shopping at Ingram Micro',
					type: 'Message',
					state: 'Success',
					content: new sap.m.Text({
						text: "Your order 7000098685 has been placed successfully ",
						textAlign: "Center"
					}),
					beginButton: new sap.m.Button({
						text: 'OK',
						press: function() {
							dialog.close();
							var HashChanger = new sap.ui.core.routing.HashChanger();
							HashChanger.setHash("");
//							app.to(page1);
						}
					}),
					afterClose: function() {
						dialog.destroy();
					
					}
				});
				dialog.open();

//				alert("Problem in creating order");
			}	
			});
			

		},
		writereview: function () {
			var dialog = new sap.m.Dialog({
				title: 'Review',
				type: 'Message',
				content: [
					new sap.m.Text({ text: 'Write your review....' }),
					new sap.m.TextArea('submitDialogTextarea', {
						liveChange: function(oEvent) {
							var sText = oEvent.getParameter('value');
							var parent = oEvent.getSource().getParent();
							parent.getBeginButton().setEnabled(sText.length > 0);
						},
						width: '100%',
						placeholder: 'Add note (required)'
					}),
					new sap.m.RatingIndicator()
				],
				beginButton: new sap.m.Button({
					text: 'Submit',
					enabled: false,
					press: function () {
						var sText = sap.ui.getCore().byId('submitDialogTextarea').getValue();
						MessageToast.show("Thanks for your review. It will help Ingram Micro to provide you better service...",
							{
						    duration: 5500,                  
						    width: "20em",
						    });
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

(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7UCR":function(e,t,r){"use strict";r.r(t),r.d(t,"UserModule",(function(){return C}));var n=r("ofXK"),a=r("h+n0"),i=r("fXoL"),s=r("F5nt"),o=r("tyNb"),c=r("5eHb"),b=r("JqCM"),l=r("3Pt+");let d=(()=>{class e{constructor(e,t,r,n,i){this.appService=e,this.router=t,this.toastr=r,this.SpinnerService=i,this.goToSignUp=()=>{this.SpinnerService.show(),setTimeout(()=>{this.router.navigate(["/sign-up"])},1e3)},this.forgotPassword=()=>{this.SpinnerService.show(),setTimeout(()=>{this.router.navigate(["forgotPassword"])},1e3)},this.signinFunction=()=>{if(this.email)if(this.password){let e={email:this.email,password:this.password};this.SpinnerService.show(),this.appService.signinFunction(e).subscribe(e=>{200===e.status?(a.Cookie.set("authtoken",e.data.authToken),a.Cookie.set("receiverId",e.data.userDetails.userId),a.Cookie.set("receiverName",e.data.userDetails.firstName+" "+e.data.userDetails.lastName),this.appService.setUserInfoInLocalStorage(e.data.userDetails),setTimeout(()=>{this.toastr.success(e.message,"Login Sucessfull"),this.SpinnerService.hide(),this.router.navigate([""]),this.router.navigate(["issue"])},1e3)):(this.SpinnerService.hide(),this.toastr.error(e.message))},e=>{404===e.status?(setTimeout(()=>{this.toastr.error("No User Found","Create a Account to lgin")},1e3),setTimeout(()=>{this.router.navigate(["sign-up"])},2500)):500===e.status?setTimeout(()=>{this.toastr.error("Failed to find User","Login Fail")},1e3):400===e.status?setTimeout(()=>{this.toastr.error("Wrong Password","login failed")},1e3):setTimeout(()=>{this.router.navigate(["sign-up"]),this.toastr.error("Create a Account","")},2e3)})}else this.toastr.warning("enter password");else this.toastr.warning("enter email")}}ngOnInit(){this.SpinnerService.hide()}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(s.a),i.Sb(o.b),i.Sb(c.b),i.Sb(i.U),i.Sb(b.c))},e.\u0275cmp=i.Mb({type:e,selectors:[["app-login"]],decls:32,vars:2,consts:[[1,"navbar","navbar-expand-md","navbar-dark","bg-dark"],["href","/",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"row","p-0","m-0"],[1,"col-sm"],[1,"col-sm","p-5"],[1,"form-signin-heading"],["for","inputEmail",1,"sr-only"],["type","email","id","inputEmail","placeholder","Email address","required","","autofocus","",1,"form-control",3,"ngModel","ngModelChange"],["for","inputPassword",1,"sr-only"],["type","password","id","inputPassword","placeholder","Password","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","btn-block",3,"click"],["bdColor","rgba(51, 51, 51, 0.8)","size","default","type","ball-spin-clockwise"],[2,"color","white"]],template:function(e,t){1&e&&(i.Yb(0,"nav",0),i.Yb(1,"a",1),i.Hc(2,"Issue Tracker"),i.Xb(),i.Yb(3,"button",2),i.Tb(4,"span",3),i.Xb(),i.Yb(5,"div",4),i.Yb(6,"ul",5),i.Yb(7,"li",6),i.Yb(8,"a",7),i.gc("click",(function(){return t.goToSignUp()})),i.Hc(9,"Sign-Up"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(10,"div",8),i.Tb(11,"div",9),i.Yb(12,"div",10),i.Yb(13,"h2",11),i.Hc(14,"Sign In"),i.Xb(),i.Yb(15,"label",12),i.Hc(16,"Email address"),i.Xb(),i.Yb(17,"input",13),i.gc("ngModelChange",(function(e){return t.email=e})),i.Xb(),i.Tb(18,"br"),i.Yb(19,"label",14),i.Hc(20,"Password"),i.Xb(),i.Yb(21,"input",15),i.gc("ngModelChange",(function(e){return t.password=e})),i.Xb(),i.Tb(22,"br"),i.Yb(23,"button",16),i.gc("click",(function(){return t.signinFunction()})),i.Hc(24,"Sign in"),i.Xb(),i.Tb(25,"br"),i.Yb(26,"button",16),i.gc("click",(function(){return t.forgotPassword()})),i.Hc(27,"Forgot Password"),i.Xb(),i.Xb(),i.Tb(28,"div",9),i.Xb(),i.Yb(29,"ngx-spinner",17),i.Yb(30,"p",18),i.Hc(31,"Please Wait. "),i.Xb(),i.Xb()),2&e&&(i.Hb(17),i.rc("ngModel",t.email),i.Hb(4),i.rc("ngModel",t.password))},directives:[l.a,l.n,l.g,l.i,b.a],styles:[""]}),e})();function u(e,t){if(1&e&&(i.Yb(0,"option"),i.Hc(1),i.Xb()),2&e){const e=t.$implicit;i.Hb(1),i.Kc("",e.key," ",e.value,"")}}function p(e,t){1&e&&(i.Yb(0,"small",33),i.Hc(1,"Phone Number Must be 10 digits!!"),i.Xb())}function g(e,t){if(1&e&&(i.Yb(0,"div"),i.Fc(1,p,2,0,"small",32),i.Xb()),2&e){i.kc();const e=i.wc(43);i.Hb(1),i.rc("ngIf",e.errors.pattern)}}function h(e,t){1&e&&(i.Yb(0,"small",33),i.Hc(1,"Password must contain atleast one digit, (lowercase, Uppercase) character , 8 characters in length but no more than 32 "),i.Xb())}function v(e,t){if(1&e&&(i.Yb(0,"div"),i.Fc(1,h,2,0,"small",32),i.Xb()),2&e){i.kc();const e=i.wc(57);i.Hb(1),i.rc("ngIf",e.errors.pattern)}}let m=(()=>{class e{constructor(e,t,r,n,a){this.appService=e,this.router=t,this.toastr=r,this.SpinnerService=a,this.code=[],this.goToSignIn=()=>{this.router.navigate(["/"])},this.signupFunction=()=>{if(this.firstName)if(this.lastName)if(this.mobile)if(this.email)if(this.countryCode)if(this.password){let e={firstName:this.firstName,lastName:this.lastName,mobile:this.countryCode+this.mobile,email:this.email,password:this.password};this.SpinnerService.show(),this.appService.signupFunction(e).subscribe(e=>{console.log(e),200===e.status?(this.toastr.success("Signup successfull"),setTimeout(()=>{this.router.navigate(["check-email"])},2e3)):404===e.status?setTimeout(()=>{this.toastr.error(e.message),this.router.navigate(["/page-not-found"])},1e3):500===e.status||400===e.status?setTimeout(()=>{this.toastr.error(e.message),this.router.navigate(["/server-error"])},1e3):403===e.status?setTimeout(()=>{this.toastr.error(e.message,"Please Login"),this.router.navigate(["/login"])},1e3):(this.SpinnerService.hide(),this.toastr.error(e.message,"error occured"))},e=>{this.SpinnerService.hide(),this.toastr.error("some error occured")})}else this.toastr.warning("enter password");else this.toastr.warning("Please Select Country code");else this.toastr.warning("enter email");else this.toastr.warning("enter mobile");else this.toastr.warning("enter last name");else this.toastr.warning("enter first name")}}ngOnInit(){this.SpinnerService.hide(),this.appService.getCountryCode().subscribe(e=>{this.code=e},e=>{this.toastr.error("Some error occured","Please try again later")})}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(s.a),i.Sb(o.b),i.Sb(c.b),i.Sb(i.U),i.Sb(b.c))},e.\u0275cmp=i.Mb({type:e,selectors:[["app-signup"]],decls:66,vars:15,consts:[[1,"navbar","navbar-expand-md","navbar-dark","bg-dark"],["href","/",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"row","p-0","m-0"],[1,"col-sm"],[1,"col-sm","p-5"],[1,"form-signin-heading"],["for","inputFirstName",1,"sr-only"],["type","text","id","inputFirstName","placeholder","FirstName","required","","autofocus","",1,"form-control",3,"ngModel","ngModelChange"],["for","inputLastName",1,"sr-only"],["type","text","id","inputLastName","placeholder","LastName","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","countryCode ",1,"sr-only"],["name","countryCode",1,"form-control",2,"width","16vh",3,"ngModel","ngModelChange"],["value",""],[4,"ngFor","ngForOf"],["for","inputMobile",1,"sr-only"],["type","number","name","mobile","id","inputMobile","placeholder","Mobile","required","","pattern","^\\d{10}$",1,"form-control",3,"ngModel","ngModelChange"],["mob","ngModel"],[4,"ngIf"],["for","inputEmail",1,"sr-only"],["type","email","id","inputEmail","placeholder","Email address","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","inputPassword",1,"sr-only"],["type","password","id","inputPassword","placeholder","Password","pattern","^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$","required","",1,"form-control",3,"ngModel","ngModelChange"],["pass","ngModel"],["type","button",1,"btn","btn-lg","btn-primary","btn-block",3,"click"],["bdColor","rgba(51, 51, 51, 0.8)","size","default","type","ball-spin-clockwise"],[2,"color","white"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(e,t){if(1&e&&(i.Yb(0,"nav",0),i.Yb(1,"a",1),i.Hc(2,"Issue Tracker"),i.Xb(),i.Yb(3,"button",2),i.Tb(4,"span",3),i.Xb(),i.Yb(5,"div",4),i.Yb(6,"ul",5),i.Yb(7,"li",6),i.Yb(8,"a",7),i.gc("click",(function(){return t.goToSignIn()})),i.Hc(9,"Sign-In"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(10,"div",8),i.Tb(11,"div",9),i.Yb(12,"div",10),i.Yb(13,"h2",11),i.Hc(14,"Sign Up To Start Your Todo-List"),i.Xb(),i.Tb(15,"br"),i.Yb(16,"span"),i.Hc(17,"FirstName: "),i.Xb(),i.Yb(18,"label",12),i.Hc(19,"FirstName"),i.Xb(),i.Yb(20,"input",13),i.gc("ngModelChange",(function(e){return t.firstName=e})),i.Xb(),i.Tb(21,"br"),i.Yb(22,"span"),i.Hc(23,"LastName: "),i.Xb(),i.Yb(24,"label",14),i.Hc(25,"LastName"),i.Xb(),i.Yb(26,"input",15),i.gc("ngModelChange",(function(e){return t.lastName=e})),i.Xb(),i.Tb(27,"br"),i.Yb(28,"span"),i.Hc(29,"Country Code: "),i.Xb(),i.Yb(30,"label",16),i.Hc(31,"Country Code"),i.Xb(),i.Yb(32,"select",17),i.gc("ngModelChange",(function(e){return t.countryCode=e})),i.Yb(33,"option",18),i.Hc(34,"Select"),i.Xb(),i.Fc(35,u,2,2,"option",19),i.lc(36,"keyvalue"),i.Xb(),i.Tb(37,"br"),i.Yb(38,"span"),i.Hc(39,"Mobile: "),i.Xb(),i.Yb(40,"label",20),i.Hc(41,"Mobile"),i.Xb(),i.Yb(42,"input",21,22),i.gc("ngModelChange",(function(e){return t.mobile=e})),i.Xb(),i.Fc(44,g,2,1,"div",23),i.Tb(45,"br"),i.Yb(46,"span"),i.Hc(47,"Email: "),i.Xb(),i.Yb(48,"label",24),i.Hc(49,"Email address"),i.Xb(),i.Yb(50,"input",25),i.gc("ngModelChange",(function(e){return t.email=e})),i.Xb(),i.Tb(51,"br"),i.Yb(52,"span"),i.Hc(53,"Password: "),i.Xb(),i.Yb(54,"label",26),i.Hc(55,"Password"),i.Xb(),i.Yb(56,"input",27,28),i.gc("ngModelChange",(function(e){return t.password=e})),i.Xb(),i.Fc(58,v,2,1,"div",23),i.Tb(59,"br"),i.Yb(60,"button",29),i.gc("click",(function(){return t.signupFunction()})),i.Hc(61,"Sign Up"),i.Xb(),i.Xb(),i.Tb(62,"div",9),i.Xb(),i.Yb(63,"ngx-spinner",30),i.Yb(64,"p",31),i.Hc(65,"Please Wait. "),i.Xb(),i.Xb()),2&e){const e=i.wc(43),r=i.wc(57);i.Hb(20),i.rc("ngModel",t.firstName),i.Hb(6),i.rc("ngModel",t.lastName),i.Hb(6),i.rc("ngModel",t.countryCode),i.Hb(3),i.rc("ngForOf",i.mc(36,13,t.code)),i.Hb(7),i.Kb("is-invalid",e.invalid&&e.touched),i.rc("ngModel",t.mobile),i.Hb(2),i.rc("ngIf",e.errors&&(e.invalid||e.touched)),i.Hb(6),i.rc("ngModel",t.email),i.Hb(6),i.Kb("is-invalid",r.invalid&&r.touched),i.rc("ngModel",t.password),i.Hb(2),i.rc("ngIf",r.errors&&(r.invalid||r.touched))}},directives:[l.a,l.n,l.g,l.i,l.o,l.j,l.q,n.l,l.k,l.l,n.m,b.a],pipes:[n.g],styles:[""]}),e})();function f(e,t){if(1&e){const e=i.Zb();i.Yb(0,"div"),i.Yb(1,"div",4),i.Yb(2,"div",5),i.Yb(3,"b"),i.Hc(4," Email Verification "),i.Xb(),i.Xb(),i.Yb(5,"div",6),i.Yb(6,"h3",7),i.Hc(7,"Your Email is Verified!!"),i.Xb(),i.Yb(8,"p",8),i.Hc(9,"Login to start your "),i.Yb(10,"b"),i.Hc(11,"To Do List"),i.Xb(),i.Xb(),i.Yb(12,"button",9),i.gc("click",(function(){return i.zc(e),i.kc().logIn()})),i.Hc(13,"Log In"),i.Xb(),i.Xb(),i.Xb(),i.Xb()}}function S(e,t){1&e&&(i.Yb(0,"div"),i.Hc(1," User Not verified. "),i.Xb())}let Y=(()=>{class e{constructor(e,t,r,n){this.appService=e,this.route=t,this.router=r,this.toaster=n,this.logIn=()=>{this.router.navigate(["login"])}}ngOnInit(){this.userId=this.route.snapshot.paramMap.get("userId"),this.appService.verifyEmail(this.userId).subscribe(e=>{this.success=200===e.status?1:-1},e=>{this.toaster.error("Some Error Occured")})}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(s.a),i.Sb(o.a),i.Sb(o.b),i.Sb(c.b))},e.\u0275cmp=i.Mb({type:e,selectors:[["app-email-verify"]],decls:6,vars:2,consts:[[1,"navbar","navbar-expand-md","navbar-dark","bg-dark"],["href","/",1,"navbar-brand"],[1,"container-fluid"],[4,"ngIf"],[1,"card","text-center",2,"box-shadow","0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(i.Yb(0,"nav",0),i.Yb(1,"a",1),i.Hc(2,"Issue Tracker"),i.Xb(),i.Xb(),i.Yb(3,"div",2),i.Fc(4,f,14,0,"div",3),i.Fc(5,S,2,0,"div",3),i.Xb()),2&e&&(i.Hb(4),i.rc("ngIf",1==t.success),i.Hb(1),i.rc("ngIf",-1==t.success))},directives:[n.m],styles:[".container-fluid[_ngcontent-%COMP%]{margin-top:20vh}"]}),e})(),X=(()=>{class e{constructor(e,t,r,n,a){this.appService=e,this.router=t,this.toastr=r,this.SpinnerService=a,this.goToSignUp=()=>{this.router.navigate(["/sign-up"])},this.goToLogIn=()=>{this.router.navigate(["login"])},this.sendLink=()=>{this.email||this.toastr.warning("enter email"),this.SpinnerService.show(),this.appService.forgotPassword(this.email).subscribe(e=>{200===e.status?(this.toastr.success("Check Your Email Indbox","Reset Link Sent Successfully"),setTimeout(()=>{this.router.navigate(["login"])},1e3)):404===e.status?(this.SpinnerService.hide(),this.toastr.error("Please Sign Up","No Email ID Found")):500===e.status?(this.SpinnerService.hide(),this.toastr.error("Failed To Find Your Email ID","Please Try Again Later")):(this.SpinnerService.hide(),this.toastr.error("Some Error Occured"))},e=>{this.SpinnerService.hide(),this.toastr.error(e.message)})}}ngOnInit(){this.SpinnerService.hide()}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(s.a),i.Sb(o.b),i.Sb(c.b),i.Sb(i.U),i.Sb(b.c))},e.\u0275cmp=i.Mb({type:e,selectors:[["app-forgot-password"]],decls:28,vars:1,consts:[[1,"navbar","navbar-expand-md","navbar-dark","bg-dark"],["href","/",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"row","p-0","m-0"],[1,"col-sm"],[1,"col-sm","p-5"],[1,"form-signin-heading"],["for","inputEmail",1,"sr-only"],["type","email","id","inputEmail","placeholder","Email address","required","","autofocus","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-lg","btn-primary","btn-block",3,"click"],["bdColor","rgba(51, 51, 51, 0.8)","size","default","type","ball-spin-clockwise"],[2,"color","white"]],template:function(e,t){1&e&&(i.Yb(0,"nav",0),i.Yb(1,"a",1),i.Hc(2,"Issue Tracker"),i.Xb(),i.Yb(3,"button",2),i.Tb(4,"span",3),i.Xb(),i.Yb(5,"div",4),i.Yb(6,"ul",5),i.Yb(7,"li",6),i.Yb(8,"a",7),i.gc("click",(function(){return t.goToSignUp()})),i.Hc(9,"Sign-Up"),i.Xb(),i.Xb(),i.Yb(10,"li",6),i.Yb(11,"a",7),i.gc("click",(function(){return t.goToLogIn()})),i.Hc(12,"Log-In"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(13,"div",8),i.Tb(14,"div",9),i.Yb(15,"div",10),i.Yb(16,"h2",11),i.Hc(17,"Please Enter Your Email Address"),i.Xb(),i.Yb(18,"label",12),i.Hc(19,"Email Address"),i.Xb(),i.Yb(20,"input",13),i.gc("ngModelChange",(function(e){return t.email=e})),i.Xb(),i.Tb(21,"br"),i.Yb(22,"button",14),i.gc("click",(function(){return t.sendLink()})),i.Hc(23,"Send Link"),i.Xb(),i.Xb(),i.Tb(24,"div",9),i.Xb(),i.Yb(25,"ngx-spinner",15),i.Yb(26,"p",16),i.Hc(27,"Please Wait. "),i.Xb(),i.Xb()),2&e&&(i.Hb(20),i.rc("ngModel",t.email))},directives:[l.a,l.n,l.g,l.i,b.a],styles:[""]}),e})();function w(e,t){1&e&&(i.Yb(0,"small",18),i.Hc(1,"Password must contain atleast one digit, (lowercase, Uppercase) character , 8 characters in length but no more than 32 "),i.Xb())}function y(e,t){if(1&e&&(i.Yb(0,"div"),i.Fc(1,w,2,0,"small",17),i.Xb()),2&e){i.kc();const e=i.wc(18);i.Hb(1),i.rc("ngIf",e.errors.pattern)}}let H=(()=>{class e{constructor(e,t,r,n,a,i){this.appService=e,this.router=t,this.route=r,this.toastr=n,this.SpinnerService=i,this.goToSignUp=()=>{this.router.navigate(["/sign-up"])},this.resetPassword=()=>{if(this.userId=this.route.snapshot.paramMap.get("userId"),this.password){let e={password:this.password,userId:this.userId};this.SpinnerService.show(),this.appService.updateUser(e).subscribe(e=>{200===e.status?setTimeout(()=>{this.toastr.success(e.message),this.router.navigate(["login"])},1500):500===e.status&&setTimeout(()=>{this.toastr.error(e.message),this.SpinnerService.hide()},1e3)},e=>{this.SpinnerService.hide(),this.toastr.error(e.message)})}else this.toastr.warning("Enter Your New Password!!")}}ngOnInit(){this.SpinnerService.hide()}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(s.a),i.Sb(o.b),i.Sb(o.a),i.Sb(c.b),i.Sb(i.U),i.Sb(b.c))},e.\u0275cmp=i.Mb({type:e,selectors:[["app-reset-password"]],decls:24,vars:4,consts:[[1,"navbar","navbar-expand-md","navbar-dark","bg-dark"],["href","/",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"row","p-0","m-0"],[1,"col-sm"],[1,"col-sm","p-5"],[1,"form-signin-heading"],["for","inputPassword",1,"sr-only"],["type","password","id","inputPassword","placeholder","Password","pattern","^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$","required","",1,"form-control",3,"ngModel","ngModelChange"],["pass","ngModel"],[4,"ngIf"],["type","button",1,"btn","btn-lg","btn-primary","btn-block",3,"click"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(e,t){if(1&e&&(i.Yb(0,"nav",0),i.Yb(1,"a",1),i.Hc(2,"Issue Tracker"),i.Xb(),i.Yb(3,"button",2),i.Tb(4,"span",3),i.Xb(),i.Yb(5,"div",4),i.Yb(6,"ul",5),i.Yb(7,"li",6),i.Yb(8,"a",7),i.gc("click",(function(){return t.goToSignUp()})),i.Hc(9,"Sign-Up"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(10,"div",8),i.Tb(11,"div",9),i.Yb(12,"div",10),i.Yb(13,"h2",11),i.Hc(14,"Enter Your New Password "),i.Xb(),i.Yb(15,"label",12),i.Hc(16,"Password"),i.Xb(),i.Yb(17,"input",13,14),i.gc("ngModelChange",(function(e){return t.password=e})),i.Xb(),i.Fc(19,y,2,1,"div",15),i.Tb(20,"br"),i.Yb(21,"button",16),i.gc("click",(function(){return t.resetPassword()})),i.Hc(22,"Sign in"),i.Xb(),i.Xb(),i.Tb(23,"div",9),i.Xb()),2&e){const e=i.wc(18);i.Hb(17),i.Kb("is-invalid",e.invalid&&e.touched),i.rc("ngModel",t.password),i.Hb(2),i.rc("ngIf",e.errors&&(e.invalid||e.touched))}},directives:[l.a,l.l,l.n,l.g,l.i,n.m],styles:[""]}),e})(),k=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Mb({type:e,selectors:[["app-check-email"]],decls:11,vars:0,consts:[[1,"navbar","navbar-expand-md","navbar-dark","bg-dark"],["href","/",1,"navbar-brand"],[1,"container-fluid"],[1,"card","text-center",2,"box-shadow","0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"],[1,"card-header"],[1,"card-body"],[1,"card-title"]],template:function(e,t){1&e&&(i.Yb(0,"nav",0),i.Yb(1,"a",1),i.Hc(2,"Issue Tracker"),i.Xb(),i.Xb(),i.Yb(3,"div",2),i.Yb(4,"div",3),i.Yb(5,"div",4),i.Yb(6,"b"),i.Hc(7," You Cannot Sign In Until your Email is not Verified!! "),i.Xb(),i.Xb(),i.Yb(8,"div",5),i.Yb(9,"h3",6),i.Hc(10,"Check Your Email For Verification"),i.Xb(),i.Xb(),i.Xb(),i.Xb())},styles:[".container-fluid[_ngcontent-%COMP%]{margin-top:10vh}"]}),e})();var T=r("cZdB"),M=r("Wavw");let C=(()=>{class e{}return e.\u0275mod=i.Qb({type:e}),e.\u0275inj=i.Pb({factory:function(t){return new(t||e)},imports:[[n.b,l.e,b.b,T.b,c.a.forRoot(),o.c.forChild([{path:"login",component:d,pathMatch:"full"},{path:"sign-up",component:m},{path:"email-verify/:userId",component:Y},{path:"forgotPassword",component:X},{path:"resetPassword/:userId",component:H},{path:"check-email",component:k},{path:"issue",component:M.a},{path:" ",redirectTo:"login",pathMatch:"full"},{path:"*",component:d},{path:"**",component:d}])]]}),e})()}}]);
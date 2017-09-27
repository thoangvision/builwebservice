"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin.component");
var AdminRouting = [
    { path: '', component: admin_component_1.AdminComponent, children: [
            // {path: '', redirectTo: 'test2', pathMatch: 'full'},
            // {path: 'test2', component: Test2Component},
            { path: 'group', loadChildren: 'app/admin/modules/group.module#GroupModule' },
        ]
    }
];
exports.AdminRoutes = router_1.RouterModule.forChild(AdminRouting);

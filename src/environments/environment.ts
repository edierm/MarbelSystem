
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apis: {
    userLogin: 'http://localhost:3000/api/users/login',
    apiUsers: 'http://localhost:3000/api/users',
    userReset: 'http://localhost:3000/api/password-reset',
    userForgot: 'http://localhost:3000/api/password-reset',
    apiUsersUpdate: 'http://localhost:3000/api/users/update',
    apiReg: 'http://localhost:3000/api/users',
    apiSale: 'http://localhost:3000/api/sales',
    apiSalesByUser: 'http://localhost:3000/api/sales/salesByUser',
    apiRentsByUser: 'http://localhost:3000/api/rents/rentsByUser',
    apiSaleUpdate: 'http://localhost:3000/api/sales/update',
    apiRent: 'http://localhost:3000/api/rents',
    apiProducts: 'http://localhost:3000/api/products',
    apiProductUpdate: 'http://localhost:3000/api/products/update',
    apiRentUpdate: 'http://localhost:3000/api/rents/update',
    apiProductsCategory: 'http://localhost:3000/api/products/productsCategory',
    apiValue: 'http://localhost:3000/api/value',
    apiValueUpdate: 'http://localhost:3000/api/value/updateValue',
    apiValueByUser: 'http://localhost:3000/api/value/valueByUser',
    apiProductDelete: 'http://localhost:3000/api/products/deleteProduct',
    apiRentDelete: 'http://localhost:3000/api/rents/deleteRent',
    apiUsersDelete: 'http://localhost:3000/api/users/deleteUsers',
    apiValueDelete: 'http://localhost:3000/api/value/deleteValue',
    apiSaleDelete: 'http://localhost:3000/api/sales/deleteSale',
    apiUsersEmail: 'http://localhost:3000/api/users/email',
    apiReports: 'http://localhost:3000/api/reports',    
    apiReportsByUser: 'http://localhost:3000/api/reports/byUser'    

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

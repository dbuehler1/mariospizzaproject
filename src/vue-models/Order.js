// function Order(order){
//     //Order potential statuses
//     const STATUSES = {Queued: 'Queued', Prep: 'Prep', Bake: 'Bake', Ready: 'Ready'}
//
//     order.status = STATUSES.Queued;
//
//     order.Prep = function(){
//         this.status = STATUSES.Prep;
//     }
//
//     order.Bake = function(){
//         this.status = STATUSES.Bake;
//     }
//
//     order.Ready = function(){
//         return this.status === STATUSES.Ready;
//     }
//     // order.remove = removeFunction || function(){};
//
//     return order;
// }
// /**
//  * Created by 1000geeks on 31.01.17.
//  */
// Images = new FS.Collection("avatars", {
//     stores: [new FS.Store.FileSystem("images", {path: "~/uploads/images/"})],
//     filter: {
//         maxSize: 1048576, // in bytes
//         allow: {
//             contentTypes: ['image/*'],
//             extensions: ['png', 'jpg', 'jpeg','gif']
//         },
//         onInvalid: function (message) {
//             if (Meteor.isClient) {
//                 console.log(message);
//             } else {
//                 console.log(message);
//             }
//         }
//     }
// });
//
// Images.allow({
//     insert: function (userId, doc, creatorId) {
//         //return true;
//         return !! userId;
//         //return creatorId;
//     },
//     update: function (userId, doc, creatorId) {
//         //return true;
//         return !! userId;
//     },
//     remove: function (userId, doc, creatorId) {
//         //return true;
//         return !! userId;
//         //return creatorId;
//     },
//     download: function (userId, doc, creatorId) {
//         return true;
//     }
// });
//
//
//

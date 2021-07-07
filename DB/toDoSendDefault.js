const ToDo = require('./initializeDB');

new ToDo({text: 'Fare la spesa'}).save();
new ToDo({text: 'Dare da mangiare ai cani'}).save();
new ToDo({text: 'Pulire la casa'}).save();
new ToDo({text: 'Andare al mercato'}).save();
new ToDo({text: 'Portare fuori i cani'}).save();
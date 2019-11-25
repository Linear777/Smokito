var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Swagger
var swaggerJsDoc = require('swagger-jsdoc');

var swaggerUi = require('swagger-ui-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events');
var authorizationRouter = require('./routes/auth');

var app = express();

// Swagger definitions
var swaggerDefinition = {
    info : {
        title : "Smokito",
        version : "1.0.0",
        description : "API description"
    },
    host : "localhost:3000",
    basePath : '/'
};

// Options for swagger docs
var options = {
    swaggerDefinition : swaggerDefinition,
    apis : ['./docs/**/*.yaml']
};

var swaggerSpec = swaggerJsDoc(options);

app.get('/swagger.json', function(req, res){

    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);

});

// Serve UI swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/events', eventsRouter);
app.use('/auth', authorizationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

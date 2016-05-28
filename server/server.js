'user strict'

var express 		= require('express'),
	path			= require('path'),
	app 			= express(),
	http 			= require('http'),
	port 			= process.env.PORT || 8085,
	mongoose 		= require('mongoose'),
	passport 		= require('passport'),

	redis 			= require('redis'),
	logger 			= require('express-logger'),
	bodyParser 		= require('body-parser'),
	cookieParser 	= require('cookie-parser'),
	expressSession 	= require('express-session'),
	RedisStore 		= require('connect-redis')(expressSession),
	role 			= require('./utils/role/role.js'),

	config 			= require('./config.js'),
	configDb 		= require('./config/database.js');

// configuration =============================================================

var client = redis.createClient();

mongoose.connect(configDb.url);

app.use(logger({path: __dirname + '/logfile.txt'}));

app.use('/client', express.static(path.join(__dirname, '../', '/client')));
app.use('/node_modules', express.static(path.join(__dirname, '../', '/node_modules')));

app.use(bodyParser.json());
app.use(cookieParser());

var redisStore = new RedisStore();

app.use(expressSession({
	store: redisStore,
	key: process.env.SESSION_KEY || 'key',
	secret: process.env.SESSION_SECRET || 'secret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());	

// roles =====================================================================
require('./config/role.js')(role);

// routes ====================================================================
require('./routes/routes.js')(app, passport, role);
require('./config/passport.js')(passport);

// create server =============================================================
app.server = http.createServer(app);

// chat ======================================================================
require('./utils/chat/index.js')(app, redisStore);

// launch ====================================================================
app.server.listen(port, function() {
	console.log('http://localhost:' + port)
});


// tout le reste =============================================================
app.all('/*', function(req, res) {
	res.sendFile('/client/index.html', { root: process.env.NODE_PATH });
});
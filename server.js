const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
logger = require('morgan'),
mongoose = require('mongoose'),
config = require('./db/config');
require('dotenv').config();
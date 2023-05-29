const ClientErrorCodes = Object.freeze({
	BAD_REQUEST: 400,
	UNAUTHORISED: 401,
	NOT_FOUND: 404,
});

const ServerErrorCodes = Object.freeze({
	OK: 200,
	CREATED: 201,
});

const SuccessCodes = Object.freeze({
	OK: 200,
	CREATED: 201,
});

module.exports = {
	ClientErrorCodes,
	ServerErrorCodes,
	SuccessCodes,
};

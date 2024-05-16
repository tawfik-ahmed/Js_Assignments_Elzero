let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https -> true | http -> true (s is optional)
// \ must be found for write /
// () group optional
// is found group must be write - and word one or more and .
// [-\w]+ get anything in the group the order and can repeat
// () group optional
// write : and characters from a-zA-Z0-9_ and word can be more one
// * this is mean zero or more
// i -> case insensitive



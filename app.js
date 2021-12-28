const defaultPhoneBook = require("./data");
const { error_json_response, success_json_response } = require("./responses");

// add phone number to phone book
const addContact = (phone_number, details) => {
  // validate type of phone_number to be string
  if (typeof phone_number !== "string") {
    return error_json_response(400, "Please enter a valid phone number");
  }
  // check if phone_number is already in phoneBook - unique
  const itExists = defaultPhoneBook.some(
    (contact) => contact.phone_number === phone_number
  );
  if (itExists) {
    return error_json_response(400, "Phone number already exist in Phone Book");
  }

  defaultPhoneBook.push({
    phone_number,
    name: details.name,
    email: details.email,
    created_at: new Date(),
  });

  return success_json_response(
    201,
    `${phone_number} successfully added to Phone Book`
  );
};

// get all contacts
const getAllContacts = () => {
  return success_json_response(
    200,
    `There are ${defaultPhoneBook.length} contacts in Phone Book`,
    defaultPhoneBook
  );
};

// get phone details by phone number
const getDetails = (phone_number) => {
  const phoneDetails = defaultPhoneBook.find(
    (contact) => contact.phone_number === phone_number
  );
  if (phoneDetails) {
    return success_json_response(200, "Found 1 contact", phoneDetails);
  }
  return error_json_response(400, "Phone number does not exist in Phone Book");
};

/************** HOW TO TEST ******************/

/** Add unique phone numbers */
// console.log(
//   addContact("09057011069", { name: "Daddy GLO", email: "daddymtn@test.com" })
// );
// console.log(
//   addContact("09057011069", { name: "Daddy GLO", email: "daddymtn@test.com" })
// ); // returns an error - phone number already exist

/** Get all contacts */
console.log(getAllContacts());

/** Get contact by phone number */
// console.log(getDetails("09057011067"));

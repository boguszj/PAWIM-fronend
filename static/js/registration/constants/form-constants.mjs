const REGISTRATION_USERNAME_AVAILABILITY_VALIDATION_ENDPOINT = 'https://infinite-hamlet-29399.herokuapp.com/check';
const REGISTRATION_ENDPOINT = 'https://infinite-hamlet-29399.herokuapp.com/sender/register';

const REGISTRATION_AVAILABLE_USERNAME_RESPONSE_VALUE = 'available';
const REGISTRATION_GENDER_MALE_VALUE = 'M';
const REGISTRATION_GENDER_FEMALE_VALUE = 'F';

const REGISTRATION_SUCCESS_HTML_RELATIVE_PATH = 'registration-success';
const REGISTRATION_SERVER_ERROR_HTML_RELATIVE_PATH = 'registration-server-error';
const REGISTRATION_CLIENT_ERROR_HTML_RELATIVE_PATH = 'registration-client-error';

const REGISTRATION_FORM_SELECTOR = 'form';
const REGISTRATION_FIRST_NAME_INPUT_SELECTOR = 'input#first_name';
const REGISTRATION_LAST_NAME_INPUT_SELECTOR = 'input#last_name';
const REGISTRATION_USERNAME_INPUT_SELECTOR = 'input#username';
const REGISTRATION_PASSWORD_INPUT_SELECTOR = 'input#password';
const REGISTRATION_REPEAT_PASSWORD_INPUT_SELECTOR = 'input#repeat_password';
const REGISTRATION_FILENAME_LABEL_SELECTOR = 'small#filename';
const REGISTRATION_PHOTO_INPUT_SELECTOR = 'input#photo_input';
const REGISTRATION_SUBMIT_BUTTON_SELECTOR = 'button#register';
const REGISTRATION_PHOTO_INPUT_BUTTON_SELECTOR = 'input#photo_input_button';
const REGISTRATION_GENDER_SWITCH_SELECTOR = '#gender-switch';
const REGISTRATION_GENDER_MALE_SELECTOR = '#gender-switch-male';
const REGISTRATION_GENDER_FEMALE_SELECTOR = '#gender-switch-female';
const REGISTRATION_GO_TO_HOMEPAGE_BUTTON_SELECTOR = '#go_to_homepage';
const REGISTRATION_RETRY_BUTTON_SELECTOR = '#retry_registration';

const REGISTRATION_ACTIVE_GENDER_BOOTSTRAP_CLASS = 'active';

const REGISTRATION_USERNAME_NOT_AVAILABLE_MESSAGE = 'Wybrana nazwa użytkownika jest zajęta';
const REGISTRATION_INVALID_NAME_OR_LAST_NAME_MESSAGE = 'Wartość pola musi zaczynać się od wielkiej litery i zawierać przynajmniej jedną małą.';
const REGISTRATION_INVALID_PASSWORD_MESSAGE = 'Hasło musi zawierać przynajmniej jedną dużą literę, jedną cyfrę oraz mieć przynajmniej 8 znaków.';
const REGISTRATION_INVALID_REPEAT_PASSWORD_MESSAGE = 'Podane hasła nie są takie same.';
const REGISTRATION_INVALID_USERNAME_MESSAGE = 'Nazwa użytkownika musi mieć przynajmniej 4 znaki i składać się z małych liter bez polskich znaków.';
const REGISTRATION_INVALID_FILENAME_MESSAGE = 'Dopuszczalne rozszerzenia plików to .jpg i .png';



export {
  REGISTRATION_USERNAME_AVAILABILITY_VALIDATION_ENDPOINT,
  REGISTRATION_ENDPOINT,

  REGISTRATION_AVAILABLE_USERNAME_RESPONSE_VALUE,
  REGISTRATION_GENDER_MALE_VALUE,
  REGISTRATION_GENDER_FEMALE_VALUE,

  REGISTRATION_SUCCESS_HTML_RELATIVE_PATH,
  REGISTRATION_SERVER_ERROR_HTML_RELATIVE_PATH,
  REGISTRATION_CLIENT_ERROR_HTML_RELATIVE_PATH,

  REGISTRATION_FIRST_NAME_INPUT_SELECTOR,
  REGISTRATION_LAST_NAME_INPUT_SELECTOR,
  REGISTRATION_USERNAME_INPUT_SELECTOR,
  REGISTRATION_PASSWORD_INPUT_SELECTOR,
  REGISTRATION_REPEAT_PASSWORD_INPUT_SELECTOR,
  REGISTRATION_FILENAME_LABEL_SELECTOR,
  REGISTRATION_FORM_SELECTOR,
  REGISTRATION_PHOTO_INPUT_SELECTOR,
  REGISTRATION_SUBMIT_BUTTON_SELECTOR,
  REGISTRATION_PHOTO_INPUT_BUTTON_SELECTOR,
  REGISTRATION_GENDER_MALE_SELECTOR,
  REGISTRATION_GENDER_FEMALE_SELECTOR,
  REGISTRATION_GENDER_SWITCH_SELECTOR,
  REGISTRATION_GO_TO_HOMEPAGE_BUTTON_SELECTOR,
  REGISTRATION_RETRY_BUTTON_SELECTOR,

  REGISTRATION_ACTIVE_GENDER_BOOTSTRAP_CLASS,

  REGISTRATION_USERNAME_NOT_AVAILABLE_MESSAGE,
  REGISTRATION_INVALID_NAME_OR_LAST_NAME_MESSAGE,
  REGISTRATION_INVALID_PASSWORD_MESSAGE,
  REGISTRATION_INVALID_REPEAT_PASSWORD_MESSAGE,
  REGISTRATION_INVALID_USERNAME_MESSAGE,
  REGISTRATION_INVALID_FILENAME_MESSAGE
};
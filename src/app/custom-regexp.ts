export class CustomRegExp {
    static NUMERIC_REGEXP = /^\d+$/;
    static ALPHA_REGEXP =
    /^[a-zA-Z\s\'\u00C0\u00C1\u00C8\u00C8\u00CC\u00D2\u00D3\u00D9\u00DA\u00E0\u00E1\u00E8\u00E9\u00EC\u00F2\u00F3\u00F9\u00FA]+$/;
    static ALPHANUMERIC_REGEXP =
    /^[\w\s\'\u00C0\u00C1\u00C8\u00C8\u00CC\u00D2\u00D3\u00D9\u00DA\u00E0\u00E1\u00E8\u00E9\u00EC\u00F2\u00F3\u00F9\u00FA]+$/;
    static CAP_REGEXP = /^\d{5}$/;
    static CURRENCY_REGEXP = /^\d+(\.[0-9]{1,2})?$/;
    static EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    static PASSWORD_REGEXP = /./;
    static PHONENUMBER_REGEXP = /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:[-\/\s.]|\d)+$/;
    static ANY_REGEXP = /.*/;
    static PERCENTAGE = /^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$/;
    static PERCENTAGE_MAX_100 = /^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$|^100$/;
    static MAX_99_INT = /^([1-9]([0-9])?|0)$/;
    static MAX_4_INT = /^\d{0,4}$/;
    static MAX_3_INT = /^\d{0,3}$/;
    // su DB (9,2)
    static MAX_7CIFRE_DEC = /^\d{0,7}(\.[0-9]{1,2})?$/;
    // su DB (11,2)
    static MAX_9CIFRE_DEC = /^\d{0,9}(\.[0-9]{1,2})?$/;
    static MAX_2CIFRE_DEC = /^\d{0,2}(\.[0-9]{1,2})?$/;
    static DATE = /^(\d{1,2}.\d{1,2}.\d{2,4})|(\d{2,4}.\d{1,2}.\d{1,2})$/;
  }
  
  
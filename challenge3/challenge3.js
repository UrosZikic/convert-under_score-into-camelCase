const challenge = (document.getElementById("challenge").onclick =
  function convertor(x) {
    const input = document.getElementById("text").value;
    x = input;

    const firstPart = x.slice(0, x.indexOf("_"));

    const last = x.slice(x.indexOf("_") + 1);
    const capitalizeLast = last[0].toUpperCase();
    const lastPart = capitalizeLast + last.slice(1).toLowerCase();

    const final = firstPart.toLowerCase() + lastPart;

    document.getElementById("infobox").innerHTML = final;
    return false;
  });
/* 
THIS PROGRAM IS A CHALLENGE AND NOT A LEGITIMATE APP

The purpose of this code is to convert an under_score string into a camelCase string
For example:
user_Name -> userName
Mike_jOHnson -> mikeJohnson
faceBOOK_pROfILe _> facebookProfile

this code is very specific and only works on under_score strings
*/

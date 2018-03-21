function ValidateAcceder(theForm)
{
   var regexp;
   regexp = /^[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]*$/;
   if (!regexp.test(theForm.Editbox2.value))
   {
      alert("Please enter only letter characters in the \"usuario\" field.");
      theForm.Editbox2.focus();
      return false;
   }
   return true;
}

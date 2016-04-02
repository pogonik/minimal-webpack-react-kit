export function getData(url) {

   return new Promise(function (resolve, reject) {

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      xhr.onloadstart = () => {
         xhr.setRequestHeader('X-Auth-Token', 'api-key');
      };

      xhr.onload = (res) => {
         if (xhr.status === 200) {
            resolve(JSON.parse(res.target.responseText));
         } else {
            reject("Podaci nisu dostupni.");
         }
      };

      xhr.onerror = () => {
         reject("Podaci nisu dostupni.");
      };

      xhr.send();
   });
}

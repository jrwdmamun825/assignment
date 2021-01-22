function megaFriend(arra)
  {
    var max = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var element = arra[i].length;
        if (element > max) {
            ans = arra[i];
            max = element;
        }
    }
    return ans;
}
var result = megaFriend(['rafiq', 'rifat', 'sifat','solimullah', 'rakibbb']);
console.log(result);



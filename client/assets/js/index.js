function fuel_csrf_token(){
        if (document.cookie.length > 0)
        {
            var c_name = "fuel_csrf_token";
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1)
            {
                var c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";" , c_start);
                if (c_end == -1)
                {
                    var c_end=document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
}

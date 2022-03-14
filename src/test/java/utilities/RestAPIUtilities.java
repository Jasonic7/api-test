package utilities;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class RestAPIUtilities {
    private RequestSpecification request =  RestAssured.given();

    public void setURI(String uri){
        request.baseUri(uri);
    }

    public Response getResponse(String type, String value){
        String path = "?q="+type+":"+value;
        return request.get(path);
    }


}

package modules;

import com.fasterxml.jackson.databind.node.ArrayNode;
import cucumber.api.java.en.*;
import io.restassured.response.Response;
import utilities.JsonParseUtilities;
import utilities.RestAPIUtilities;
import static org.junit.Assert.*;
import java.io.IOException;
import java.util.HashMap;

public class testBookInfoModules {
    private HashMap<String, String> context = new HashMap<String, String>();
    private JsonParseUtilities parser = new JsonParseUtilities();

    @Given("Book API service")
    public void add_current_api_service() {
        context.put("uri","https://www.googleapis.com/books/v1/volumes");
    }

    @When("I request ISBN's code {string} from server")
    public void i_request_ISBN_s_code_from_server(String code) {
        try {
            RestAPIUtilities apiObj = new RestAPIUtilities();
            apiObj.setURI(context.get("uri"));
            Response resp = apiObj.getResponse("isbn", code);
            context.put("response",resp.asString());
            int statuscode = resp.getStatusCode();

            assertEquals(statuscode, 200);
        }catch (AssertionError error){
            fail("Step failed: "+error);
        }
    }

    @Then("Server response contains author's {string} name")
    public void server_response_contains_author_s_name(String author) {
        try {
            String apiresponde = context.get("response");
            ArrayNode items = parser.templateMathcer(apiresponde).getItems();
            String retrived_author = parser.getAuthor(items, "volumeInfo", "authors");

            assertEquals(author, retrived_author);
        }catch (AssertionError error){
            fail("Step failed: "+error);
        } catch (Exception exc){
            fail("Java exception: "+exc);
        }
    }

    @Then("Server response contains ebook {string} availability")
    public void server_response_contains_ebook_availability(String status)  {
        try {
            String apiresponde = context.get("response");
            ArrayNode items = parser.templateMathcer(apiresponde).getItems();

            Boolean ebookstatus = parser.getIsEbook(items, "saleInfo", "isEbook");
            assertEquals(ebookstatus,Boolean.valueOf(status));
        }catch (AssertionError error){
            fail("Step failed: "+error);
        } catch (Exception exc){
            fail("Java exception: "+exc);
        }
    }

    @Then("Server response contains pdf access {string} availability")
    public void server_response_contains_pdf_access_availability(String status) throws IOException {
        try {
            String apiresponde = context.get("response");
            ArrayNode items = parser.templateMathcer(apiresponde).getItems();

            Boolean pdfstatus = parser.getIsEbook(items, "pdf", "isAvailable");
            assertEquals(pdfstatus, Boolean.valueOf(status));
        }catch (AssertionError error){
            fail("Step failed: "+error);
        } catch (Exception exc){
            fail("Java exception: "+exc);
        }
    }

}

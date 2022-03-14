package utilities;
import Templates.BookTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;

import java.io.IOException;
import java.util.List;

public class JsonParseUtilities {

    private ObjectMapper mapper = new ObjectMapper();


    public BookTemplate templateMathcer(String json) throws IOException {
        BookTemplate book = mapper.readValue(json,BookTemplate.class);
        return book;
    }

    public String getAuthor(ArrayNode items, String parent, String child){
        List author = mapper.convertValue(items.findValue(parent).findValue(child),List.class);
        return author.get(0).toString();
    }

    public Boolean getIsPdf(ArrayNode items,String parent, String child){
        Boolean isPdf = items.findValue(parent).findValue(child).asBoolean();
        return isPdf;
    }

    public Boolean getIsEbook(ArrayNode items,String parent, String child){
        Boolean isEbook = items.findValue(parent).findValue(child).asBoolean();
        return isEbook;
    }
}

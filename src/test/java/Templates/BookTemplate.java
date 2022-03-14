package Templates;

import com.fasterxml.jackson.databind.node.ArrayNode;

public class BookTemplate {
    private String kind;
    private String totalItems;
    private ArrayNode items;

    public String getTotalItems() {

        return totalItems;
    }

    public void setTotalItems(String totalItems) {

        this.totalItems = totalItems;
    }

    public ArrayNode getItems() {

        return items;
    }

    public void setItems(ArrayNode items) {

        this.items = items;
    }

    public String getKind() {

        return kind;
    }

    public void setKind(String kind) {

        this.kind = kind;
    }


}

package com.springtutorial.beeclassy.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jdk.jfr.Name;
import org.springframework.lang.NonNull;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;
@Entity
public class Product {
    @Id
    private final String id;
    private final String name;
    private final String description;
    private final int price;

    public Product(@JsonProperty("id") String id,
                   @JsonProperty("name") String name,
                   @JsonProperty("description") String description,
                   @JsonProperty("price") int price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getPrice() {
        return price;
    }
}

package com.beeclassy.login.beeclassy.login.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jdk.jfr.Name;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import java.util.UUID;
@Entity
@Table(name = "product")
public class Product {
    @Id
    private String id;
    private String name;
    private String description;
    private int price;
    private String imgUrl;
    private String gender;
    private String type;
    @ManyToOne
    @JoinColumn(name="product_id", nullable=false)
    private Wishlist wishlist;

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public String getGender() {
        return gender;
    }

    public String getType() {
        return type;
    }

    public Product() {
    }

    public Product(@JsonProperty("id") String id,
                   @JsonProperty("name") String name,
                   @JsonProperty("description") String description,
                   @JsonProperty("price") int price,
                   @JsonProperty("imgUrl") String imgUrl,
                   @JsonProperty("type") String type,
                   @JsonProperty("gender") String gender) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.type = type;
        this.gender = gender;
    }



    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(int price) {
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

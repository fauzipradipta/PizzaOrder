package com.landingpage.landingpagebackend.response;

public class ItemsResponse {
	 private String message;

	    public ItemsResponse(String message) {
	        this.message = message;
	    }

	    public String getMessage() {
	        return message;
	    }

	    public void setMessage(String message) {
	        this.message = message;
	    }
}

package com.landingpage.landingpagebackend.Entity;

import javax.persistence.*;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="image")
@Builder
public class Items {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;
	
	@Column(name="name")
	private String name; 
	
	@Column(name="itemDesc")
	private String itemDesc; 
	
	@Column(name="itemPrice")
	private String itemprice; 
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "image", unique = false, nullable = false, length = 100000)
	private byte[] image;
	
}

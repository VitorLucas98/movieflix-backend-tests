package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private Long idMovie;
	private Long idUser;
	
	public ReviewDTO() {
	}
	
	public ReviewDTO(Long id, String text, Long idMovie, Long idUser) {
		super();
		this.id = id;
		this.text = text;
		this.idMovie = idMovie;
		this.idUser = idUser;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		this.text = entity.getText();
		this.idMovie = entity.getMovie().getId();
		this.idUser = entity.getUser().getId();
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}

	public Long getIdMovie() {
		return idMovie;
	}

	public void setIdMovie(Long idMovie) {
		this.idMovie = idMovie;
	}

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}
}

package com.skilldistillery.fishingdays.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="fishinginformation")
public class FishingDays {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String location;
	
	@Column(name="fishing_style")
	private String fishingStyle;
	
	@Column(name="fishing_mode")
	private String fishingMode;
	
	@Column(name="amount_caught")
	private Integer amountCaught;
	
	@Temporal(TemporalType.DATE)
	@CreationTimestamp
	private Date date;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getFishingStyle() {
		return fishingStyle;
	}

	public void setFishingStyle(String fishingStyle) {
		this.fishingStyle = fishingStyle;
	}

	public String getFishingMode() {
		return fishingMode;
	}

	public void setFishingMode(String fishingMode) {
		this.fishingMode = fishingMode;
	}

	public Integer getAmountCaught() {
		return amountCaught;
	}

	public void setAmountCaught(Integer amountCaught) {
		this.amountCaught = amountCaught;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((amountCaught == null) ? 0 : amountCaught.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((fishingMode == null) ? 0 : fishingMode.hashCode());
		result = prime * result + ((fishingStyle == null) ? 0 : fishingStyle.hashCode());
		result = prime * result + id;
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FishingDays other = (FishingDays) obj;
		if (amountCaught == null) {
			if (other.amountCaught != null)
				return false;
		} else if (!amountCaught.equals(other.amountCaught))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (fishingMode == null) {
			if (other.fishingMode != null)
				return false;
		} else if (!fishingMode.equals(other.fishingMode))
			return false;
		if (fishingStyle == null) {
			if (other.fishingStyle != null)
				return false;
		} else if (!fishingStyle.equals(other.fishingStyle))
			return false;
		if (id != other.id)
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		return true;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("FishingDays [id=");
		builder.append(id);
		builder.append(", location=");
		builder.append(location);
		builder.append(", fishingStyle=");
		builder.append(fishingStyle);
		builder.append(", fishingMode=");
		builder.append(fishingMode);
		builder.append(", amountCaught=");
		builder.append(amountCaught);
		builder.append(", date=");
		builder.append(date);
		builder.append("]");
		return builder.toString();
	}

	public FishingDays(int id, String location, String fishingStyle, String fishingMode, Integer amountCaught,
			Date date) {
		super();
		this.id = id;
		this.location = location;
		this.fishingStyle = fishingStyle;
		this.fishingMode = fishingMode;
		this.amountCaught = amountCaught;
		this.date = date;
	}
	
	public FishingDays() {
		
	}
	
}
	
	
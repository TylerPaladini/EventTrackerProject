package com.skilldistillery.fishingdays.service;

import java.util.List;

import com.skilldistillery.fishingdays.entities.FishingDays;

public interface FishingDaysService {
	
	List<FishingDays> showAll();
	FishingDays createADay(FishingDays fishingDays);
	FishingDays updateADay(FishingDays fishingdays, Integer id);
	Boolean deleteADay(Integer id);
	

}

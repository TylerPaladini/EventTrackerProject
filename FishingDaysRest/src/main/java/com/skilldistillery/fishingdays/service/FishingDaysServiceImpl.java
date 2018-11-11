package com.skilldistillery.fishingdays.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fishingdays.entities.FishingDays;
import com.skilldistillery.fishingdays.repositories.FishingDaysRepository;

@Service
public class FishingDaysServiceImpl implements FishingDaysService {
	
	@Autowired
	private FishingDaysRepository fishRepo;

	@Override
	public List<FishingDays> showAll() {
		
		return fishRepo.findAll();
	}

	@Override
	public FishingDays createADay(FishingDays fishingDays) {
		
		FishingDays newFishDay = fishRepo.saveAndFlush(fishingDays);
		
		return newFishDay;
	}

	@Override
	public FishingDays updateADay(FishingDays fishingdays, Integer id) {
		Optional<FishingDays> opt = fishRepo.findById(id);
		FishingDays updatedDay = opt.get();
		
		if(updatedDay != null) {
			updatedDay.setLocation(fishingdays.getLocation());
			updatedDay.setFishingStyle(fishingdays.getFishingStyle());
			updatedDay.setFishingMode(fishingdays.getFishingMode());
			updatedDay.setAmountCaught(fishingdays.getAmountCaught());
			
			updatedDay = fishRepo.saveAndFlush(updatedDay);
		}
		
		return updatedDay;
	}		
		

	@Override
	public Boolean deleteADay(Integer id) {
		if(fishRepo.findById(id).isPresent()) {
			fishRepo.deleteById(id);
			return true;
		}
		return false;
	}

}

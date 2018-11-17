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
	public FishingDays replaceADay(FishingDays fishingdays, Integer id) {
		Optional<FishingDays> opt = fishRepo.findById(id);
		FishingDays replacedDay = opt.get();
		
		if(replacedDay != null) {
			replacedDay.setLocation(fishingdays.getLocation());
			replacedDay.setFishingStyle(fishingdays.getFishingStyle());
			replacedDay.setFishingMode(fishingdays.getFishingMode());
			replacedDay.setAmountCaught(fishingdays.getAmountCaught());
			
			replacedDay = fishRepo.saveAndFlush(replacedDay);
		}
		
		return replacedDay;
	}		
	
	
	
	@Override
	public FishingDays updateADay(FishingDays fishingdays, Integer id) {
		Optional<FishingDays> opt = fishRepo.findById(id);
		FishingDays updatedDay = opt.get();
		
		if(fishingdays.getLocation() != null) {
			updatedDay.setLocation(fishingdays.getLocation());
		}
		if(fishingdays.getFishingStyle() != null) {
			updatedDay.setFishingStyle(fishingdays.getFishingStyle());
		}
		if(fishingdays.getFishingMode() != null) {
			updatedDay.setFishingMode(fishingdays.getFishingMode());
		}
		if(fishingdays.getAmountCaught() != 0) {
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

	@Override
	public FishingDays findById(Integer id) {
		Optional<FishingDays> opt = fishRepo.findById(id);
		FishingDays dayById = opt.get();
		
		return dayById;
	}


}

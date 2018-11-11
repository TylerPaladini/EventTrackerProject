package com.skilldistillery.fishingdays.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fishingdays.entities.FishingDays;

public interface FishingDaysRepository extends JpaRepository<FishingDays, Integer> {

}

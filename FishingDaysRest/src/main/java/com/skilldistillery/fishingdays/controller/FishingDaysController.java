package com.skilldistillery.fishingdays.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.fishingdays.entities.FishingDays;
import com.skilldistillery.fishingdays.service.FishingDaysService;

@RestController
@RequestMapping("api")
public class FishingDaysController {

	@Autowired
	private FishingDaysService fishServ;

	@RequestMapping(path = "fishingdays", method = RequestMethod.GET)
	public List<FishingDays> index() {
		List<FishingDays> fishDays = fishServ.showAll();

		return fishDays;

	}

	@RequestMapping(path = "fishingdays", method = RequestMethod.POST)
	public String createFishDay(@RequestBody FishingDays fishingDays) {
		FishingDays newDay = fishServ.createADay(fishingDays);

		return "";

	}
	
	@RequestMapping(path="fishingdays/{id}", method=RequestMethod.PUT)
	public FishingDays replaceADay(@RequestBody FishingDays fishingdays, @PathVariable ("id") Integer id) {
		
		FishingDays replacedDay = fishServ.replaceADay(fishingdays, id);
		
		return replacedDay;
		
	}
	@RequestMapping(path="fishingdays/{id}", method=RequestMethod.PATCH)
	public FishingDays updateADay(@RequestBody FishingDays fishingdays, @PathVariable ("id") Integer id) {
		FishingDays updateDay = fishServ.updateADay(fishingdays, id);
		
		return updateDay;
		
	}

	@RequestMapping(path = "fishingdays/{id}", method = RequestMethod.DELETE)
	public Boolean deleteADay(@PathVariable("id") Integer id, HttpServletResponse resp) {
		Boolean deleted = fishServ.deleteADay(id);
		if (deleted) {
			resp.setStatus(204);
			resp.setHeader("message", "Fishing day deleted successfully");
			deleted = null;
			return deleted;
		} else {
			resp.setStatus(404);
			resp.setHeader("message", "Fishing day failed to be deleted");
			return deleted;
		}

	}

}

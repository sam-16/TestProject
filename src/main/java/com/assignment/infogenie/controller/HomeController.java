package com.assignment.infogenie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class HomeController {

	@GetMapping("/home")
	public String home() 
	{
		return "Home";
	}
	
	@GetMapping("/contactDetails")
	public String contactDetails() 
	{
		return "ContactDetails";
	}
	
	@GetMapping("/accountDetails")
	public String accountDetails() 
	{
		return "AccountDetails";
	}
	
}

package com.example.IPLdashboard.Controller;

import com.example.IPLdashboard.model.Match;
import com.example.IPLdashboard.model.Team;
import com.example.IPLdashboard.repository.MatchRepository;
import com.example.IPLdashboard.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {

    @Autowired
    private TeamRepository teamRepository ;
    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("/teams")
    public Iterable<Team> getTeams(){
        return teamRepository.findAll();
    }

    // getting for the team
    @GetMapping("/teams/{teamName}")
    public Team getTeamDate(@PathVariable String teamName){
        // We will get the info of the team from teamRepository and then we will populate it with the
        // last matches data
        Team team =  teamRepository.findByTeamName(teamName);

        // using the Match Repository
        team.setMatches(matchRepository.getLatestMatches(teamName,4));

        // returning the team
        return team;
    }

    // getting the matches as per the year
    @GetMapping("/teams/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){

        LocalDate startDate = LocalDate.of(year,1,1);
        LocalDate endDate = LocalDate.of(year + 1 , 1 , 1);


        return matchRepository.getByTeamBetweenDates(teamName,startDate,endDate);
    }


}

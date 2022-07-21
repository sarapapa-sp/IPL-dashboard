package com.example.IPLdashboard.Controller;

import com.example.IPLdashboard.model.Team;
import com.example.IPLdashboard.repository.MatchRepository;
import com.example.IPLdashboard.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    @Autowired
    private TeamRepository teamRepository ;
    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("/teams/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        // We will get the info of the team from teamRepository and then we will populate it with the
        // last matches data
        Team team =  teamRepository.findByTeamName(teamName);

        // using the Match Repository
        team.setMatches(matchRepository.getLatestMatches(teamName,4));

        // returning the team
        return team;
    }


}

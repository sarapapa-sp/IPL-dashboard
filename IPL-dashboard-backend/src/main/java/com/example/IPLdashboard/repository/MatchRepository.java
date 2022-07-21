package com.example.IPLdashboard.repository;

import com.example.IPLdashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long> {
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1 , String teamName2 , Pageable pageable);

    default List<Match> getLatestMatches(String teamName,int number){
        return getByTeam1OrTeam2OrderByDateDesc(teamName,teamName, PageRequest.of(0,number));
    }

}

package com.example.IPLdashboard.repository;

import com.example.IPLdashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long> {
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1 , String teamName2 , Pageable pageable);

//    List<Match> getByTeam1OrTeam2AndDateBetweenOrderByDateDesc(String teamName1, String teamName2 , LocalDate date1 , LocalDate date2);
    // getting the matches using Query anotation
    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :startDate and :endDate order by m.date desc")
    List<Match> getByTeamBetweenDates(@Param("teamName") String teamName,@Param("startDate") LocalDate startDate,@Param("endDate") LocalDate endDate);

    default List<Match> getLatestMatches(String teamName,int number){
        return getByTeam1OrTeam2OrderByDateDesc(teamName,teamName, PageRequest.of(0,number));
    }

}

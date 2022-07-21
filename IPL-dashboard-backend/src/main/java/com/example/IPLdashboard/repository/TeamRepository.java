package com.example.IPLdashboard.repository;

import com.example.IPLdashboard.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TeamRepository extends JpaRepository<Team, Long> {
    Team findByTeamName(String teamName);
}

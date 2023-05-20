import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Issue from "./Issue";
import IssuesHeader from "./IssuesHeader";

const IssuesContainer = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/facebook/react/issues?per_page=30&page=${page}`
        );
        const data = await response.json();
        setIssues(data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch issues from GitHub API.", error);
        setLoading(false);
      }
    };

    const fetchTotalPages = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/facebook/react`
        );
        const data = await response.json();
        const totalIssues = data.open_issues_count;
        const totalPages = Math.ceil(totalIssues / 30);
        setTotalPages(totalPages);
      } catch (error) {
        console.log("Failed to fetch repository data from GitHub API.", error);
      }
    };

    fetchIssues();
    fetchTotalPages();
  }, [page]);

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (page <= 6) {
        for (let i = 1; i <= 8; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (page >= totalPages - 5) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 7; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = page - 2; i <= page + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <IssuesHeader />
      {loading ? (
        <CircularProgress style={{ marginTop: "40px" }} />
      ) : (
        <>
          {issues.map((issue) => (
            <Issue key={issue.number} issue={issue} />
          ))}
          <div>
            <button className="btnprevious"   onClick={goToPreviousPage} disabled={page === 1}>
              Previous
            </button>
            {generatePageNumbers().map((pageNumber, index) => (
              <button
                className="btnnumber"
                
                key={index}
                onClick={() => goToPage(pageNumber)}
                disabled={pageNumber === page}
              >
                {pageNumber}
              </button>
            ))}
            <button className="btnnext"
              
              onClick={goToNextPage}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default IssuesContainer;

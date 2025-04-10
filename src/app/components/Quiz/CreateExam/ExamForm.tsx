"use client";
import React from "react";
import { ExamFormProps } from "@/app/types/exam";

const ExamForm = ({
  examTitle,
  setExamTitle,
  startAt,
  setStartAt,
  handleFileImport,
}: ExamFormProps) => {
  return (
    <>
      <div className="mb-4">
        <label className="form-label">Tên bộ đề:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nhập tên bộ đề..."
          value={examTitle}
          onChange={(e) => setExamTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="form-label">Thời gian mở đề:</label>
        <input
          type="datetime-local"
          className="form-control"
          value={startAt}
          onChange={(e) => setStartAt(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="form-label">Import đề từ file JSON:</label>
        <input
          type="file"
          accept=".json"
          className="form-control"
          onChange={handleFileImport}
        />
      </div>
    </>
  );
};

export default ExamForm;

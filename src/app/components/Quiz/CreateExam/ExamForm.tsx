"use client";
import React from "react";

type ExamFormProps = {
  examTitle: string;
  setExamTitle: (title: string) => void;
  startAt: string;
  setStartAt: (value: string) => void;
  handleFileImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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
        <div className="mt-2">
          <a href="/json/ReactJS.json" download className="text-blue-500 underline">
            Tải file mẫu (.json)
          </a>
        </div>
      </div>
    </>
  );
};

export default ExamForm;

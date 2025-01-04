function exam_status(totmarks, is_exam) {
    if (is_exam) {
        return totmarks >= 90;
    }
    return (totmarks >= 89 && totmarks <= 100);
}

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "))
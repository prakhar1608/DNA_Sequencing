#include <stdio.h>
#include <string.h>
#define DNA_BASE 4
#define MAX_P 100
#define MAX_T 1000
void printTable(const int shiftTable[]) {
 printf("Shift Table:\n");
 printf("Character Shift Value\n");
 printf("A %d\n", shiftTable[0]);
 printf("C %d\n", shiftTable[1]);
 printf("G %d\n", shiftTable[2]);
 printf("T %d\n", shiftTable[3]);
}
void ShiftTable(const char* pattern, int m, int shiftTable[]) {
 for (int i = 0; i < DNA_BASE; ++i) {
 shiftTable[i] = m;
 }
 for (int j = 0; j < m - 1; ++j) {
 int index;
 switch (pattern[j]) {
 case 'A': index = 0; break;
 case 'C': index = 1; break;
 case 'G': index = 2; break;
 case 'T': index = 3; break;
 default: index = -1; break;
 }
 if (index != -1) {
 shiftTable[index] = m - 1 - j;
 }
 }
}
int horspoolMatch(const char* text, int n, const char* pattern, int m) {
 int shiftTable[DNA_BASE];
 ShiftTable(pattern, m, shiftTable);
 printTable(shiftTable);
 int matches = 0;
 int i = m - 1;
 while (i < n) {
 int k = 0;
 while (k < m && pattern[m - 1 - k] == text[i - k]) {
 k++;
 }
 if (k == m) {
 matches++;
 printf("Pattern found at index %d\n", i - m + 1);
 }
 int shift;
 switch (text[i]) {
 case 'A': shift = shiftTable[0]; break;
 case 'C': shift = shiftTable[1]; break;
 case 'G': shift = shiftTable[2]; break;
 case 'T': shift = shiftTable[3]; break;
 default: shift = m; break;
 }
 i += shift;
 }
 return matches;
}

int main() {
 char text[MAX_T];
 char pattern[MAX_P];

 printf("Enter the DNA sequence: ");
 scanf("%s", text);
 printf("Enter the pattern to search: ");
 scanf("%s", pattern);
 int n = strlen(text);
 int m = strlen(pattern);
 int matches = horspoolMatch(text, n, pattern, m);
 printf("Total matches found: %d\n", matches);
 return 0;
}
# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.17

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Disable VCS-based implicit rules.
% : %,v


# Disable VCS-based implicit rules.
% : RCS/%


# Disable VCS-based implicit rules.
% : RCS/%,v


# Disable VCS-based implicit rules.
% : SCCS/s.%


# Disable VCS-based implicit rules.
% : s.%


.SUFFIXES: .hpux_make_needs_suffix_list


# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/Cellar/cmake/3.17.2/bin/cmake

# The command to remove a file.
RM = /usr/local/Cellar/cmake/3.17.2/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/Alfonso/Exercism/cpp/leap

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/Alfonso/Exercism/cpp/leap

# Utility rule file for test_leap.

# Include the progress variables for this target.
include CMakeFiles/test_leap.dir/progress.make

CMakeFiles/test_leap: leap
	./leap

test_leap: CMakeFiles/test_leap
test_leap: CMakeFiles/test_leap.dir/build.make

.PHONY : test_leap

# Rule to build all files generated by this target.
CMakeFiles/test_leap.dir/build: test_leap

.PHONY : CMakeFiles/test_leap.dir/build

CMakeFiles/test_leap.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/test_leap.dir/cmake_clean.cmake
.PHONY : CMakeFiles/test_leap.dir/clean

CMakeFiles/test_leap.dir/depend:
	cd /Users/Alfonso/Exercism/cpp/leap && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/Alfonso/Exercism/cpp/leap /Users/Alfonso/Exercism/cpp/leap /Users/Alfonso/Exercism/cpp/leap /Users/Alfonso/Exercism/cpp/leap /Users/Alfonso/Exercism/cpp/leap/CMakeFiles/test_leap.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/test_leap.dir/depend


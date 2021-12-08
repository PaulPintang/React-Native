import React from "react"
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  VStack
} from "native-base"
export function Example() {
  return (
    <VStack space={4} alignItems="center">

    <Pressable
      onPress={() => {
        console.log("Hello world")
      }}
    >
      <Box p="5" rounded="8" bg="cyan.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            EXPO
          </Text>
          <Spacer />
          <Text fontSize={10} color="cyan.100">
           
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
         What is EXPO ?
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
          Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            Read More
          </Text>
        </Flex>
      </Box>
    </Pressable>
      <Pressable
      onPress={() => {
        console.log("Hello world")
      }}
    >
      <Box p="5" rounded="8" bg="cyan.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            Business
          </Text>
          <Spacer />
          <Text fontSize={10} color="cyan.100">
            1 month ago
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
          Marketing License
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
          Unlock powerfull time-saving tools for creating email delivery and
          collecting marketing data
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            Read More
          </Text>
        </Flex>
      </Box>
    </Pressable>
      <Pressable
      onPress={() => {
        console.log("Hello world")
      }}
    >
      <Box p="5" rounded="8" bg="cyan.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            Business
          </Text>
          <Spacer />
          <Text fontSize={10} color="cyan.100">
            1 month ago
          </Text>
        </HStack>
        <Text color="cyan.50" mt="3" fontWeight="medium" fontSize={20}>
          Marketing License
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
          Unlock powerfull time-saving tools for creating email delivery and
          collecting marketing data
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            Read More
          </Text>
        </Flex>
      </Box>
    </Pressable>
    </VStack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
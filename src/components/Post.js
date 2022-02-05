import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import Identicon from 'identicon.js';
import { FiTrash2, FiSend } from 'react-icons/fi';

export function Post() {
  return (
    <Flex direction="column">
      <Image
        src="https://www.arweave.net/gySlSWWvotlwL1lWwtSE_HpROBjfnSVbzP0UX44Kdws?ext=png"
        alt="NoiaDuck 331"
        objectFit="cover"
        borderTopRadius="md"
      />
      <Flex bg="gray.700" py={2} borderBottomRadius="md" direction="column">
        <Text fontWeight="semibold" fontSize="lg" px={4}>
          Noia Duck 331
        </Text>
        <Divider my={1} />
        <Flex direction="column" px={4} gap={1}>
          <Text fontWeight="semibold">Proposals</Text>
          {/* <Text fontStyle="italic" fontSize="sm" color="gray.300">
            This piece doesn&apos;t have any proposals yet...
          </Text> */}

          <Flex align="center" justify="space-between">
            <Flex align="center" gap={2}>
              <Text>3 Ξ by 0xDdD...C38</Text>
              <Image
                borderRadius="full"
                boxSize="20px"
                src={`data:image/png;base64,${new Identicon(
                  '0x6ef56C35548F2eCEc6aE17A4DDbf4719829d6211',
                  20
                ).toString()}`}
                alt="user profile"
              />
            </Flex>
          </Flex>
          <Flex align="center" justify="space-between">
            <Flex align="center" gap={2}>
              <Text>3 Ξ by 0xDdD...C38</Text>
              <Image
                borderRadius="full"
                boxSize="20px"
                src={`data:image/png;base64,${new Identicon(
                  '0xDdDbC91414064cd761E389F235123eF059eebC38',
                  20
                ).toString()}`}
                alt="user profile"
              />
            </Flex>
            <Tooltip
              label="Remove your proposal"
              placement="top"
              bg="gray.600"
              color="white"
              hasArrow
            >
              <Button colorScheme="red" variant="link">
                <Icon as={FiTrash2} />
              </Button>
            </Tooltip>
          </Flex>

          <Flex as="form" mt={2}>
            <Input
              size="sm"
              type="number"
              placeholder="Send a proposal in ETH..."
              variant="filled"
              isRequired
            />
            <Button type="submit" colorScheme="messenger" variant="link">
              <Icon as={FiSend} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}